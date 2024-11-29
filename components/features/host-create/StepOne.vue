<script setup lang="ts">
//@ts-nocheck
import type { PropType } from "vue";
import type { HostOnboardingModel } from "~/pages/host/(public)/profileCreate/index.vue";

import { watch, defineProps, defineEmits, reactive, toRaw, shallowRef } from "vue";

// Define props and emit
const props = defineProps({
    model: {
        type: Object as PropType<HostOnboardingModel>,
        required: true,
    },
    initialImages: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
});
const emit = defineEmits(["update:model"]);

// Create a reactive copy of the model
const localModel = reactive({
    ...JSON.parse(JSON.stringify(props.model)),
    images: props.initialImages,
});

// Flag to prevent circular updates
let updatingFromParent = false;

// Sync localModel with props.model (from parent updates)
watch(
    () => props.model,
    (newValue) => {
        if (!updatingFromParent) {
            Object.assign(localModel, newValue);
        }
    },
    { deep: true }
);

// Emit changes to the parent (from child updates)
watch(
    localModel,
    (newValue) => {
        if (!updatingFromParent) {
            updatingFromParent = true;
            emit("update:model", toRaw(newValue));
            updatingFromParent = false;
        }
    },
    { deep: true }
);

//
import { onMounted, ref } from "vue";
import L from "leaflet";

// Import Leaflet CSS for proper styling
import "leaflet/dist/leaflet.css";

// Reference to the map container
const mapContainer = ref(null);

onMounted(() => {
    // Check if the map container exists
    if (mapContainer.value) {
        const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap",
        }).addTo(map);

        let marker;

        // Add a click event to the map
        map.on("click", (e) => {
            const { lat, lng } = e.latlng;

            // Remove existing marker, if any
            if (marker) {
                map.removeLayer(marker);
            }

            // Add a new marker at the clicked location
            marker = L.marker([lat, lng]).addTo(map);

            // Output lat/lng to console
            console.log("Latitude:", lat, "Longitude:", lng);

            // Update the local model with the new location
            localModel.location = { lat, lng };
        });
    } else {
        console.error("Map container not found.");
    }
});
</script>

<template>
    <h3 class="mb-3">Step 1</h3>
    <h2 class="text-4xl mb-3">Tell us about your place</h2>
    <p>
        In this step, we'll ask you which type of property you have, as well as what kind of work you're offering out to
        our adventurers.
    </p>

    <div ref="mapContainer" class="map-container h-[500px] w-1/2 border-slate-600 border-2 rounded-xl mt-6"></div>
</template>

<style></style>
