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

// Add a property to localModel for the selected option
localModel.bookingOption = localModel.bookingOption || "";

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
</script>

<template>
    <h2 class="text-4xl mb-3">pick your booking settings</h2>
    <p>You can change this at any time <a href="#" class="underline">Learn more</a>.</p>

    <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
        <input type="radio" id="approve" value="approve" v-model="localModel.bookingOption" />
        <label for="approve"> approve your first 5 bookings</label>
    </div>
    <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
        <input type="radio" id="instant" value="instant" v-model="localModel.bookingOption" />
        <label for="instant"> use instant book</label>
    </div>
</template>
