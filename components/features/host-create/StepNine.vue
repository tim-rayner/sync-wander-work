<script setup lang="ts">
import type { PropType } from "vue";
import type { HostOnboardingModel } from "~/pages/host/(public)/profileCreate/index.vue";

import { watch, defineProps, defineEmits, reactive, toRaw, shallowRef } from "vue";

// Define props and emit
const props = defineProps({
    model: {
        type: Object as PropType<HostOnboardingModel>,
        required: true,
    },
});
const emit = defineEmits(["update:model"]);

// Create a reactive copy of the model
const localModel = reactive(JSON.parse(JSON.stringify(props.model)));

// Add a property to localModel for the selected offerings
localModel.workplaceOfferings = localModel.workplaceOfferings || [];

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

const WorkplaceOfferings = [
    "Farming",
    "Beach Access",
    "Mountain Views",
    "Activities by Host",
    "Pet Friendly",
    "Family Friendly",
    "Private Space",
    "Shared Space",
    "Work Space",
    "Pool",
    "Hot Tub",
    "Sauna",
];
</script>

<template>
    <h2 class="text-4xl mb-3">Tell us what your place has to offer</h2>
    <p>You can add more after you publish your listing</p>

    <!-- DasiyUI badges in a responsive grid layout - clear and concise -->
    <div class="">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 pt-12">
            <div
                v-for="offering in WorkplaceOfferings"
                :key="offering"
                class="p-4 border w-fit badge badge-neutral cursor-pointer"
            >
                {{ offering }}
            </div>
        </div>
    </div>
</template>
