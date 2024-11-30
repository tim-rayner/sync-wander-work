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

// Add a property to localModel for the description
localModel.description = localModel.description || "";

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
    <h3 class="mb-3">step 3</h3>
    <h2 class="text-4xl mb-3">create your description</h2>
    <p>share what makes your place special</p>
    <textarea
        v-model="localModel.description"
        placeholder="Share what makes your place special"
        class="textarea textarea-secondary mt-3"
        style="width: 100%"
        :maxlength="500"
    ></textarea>
    <span>{{ localModel.description.length }}/500</span>
</template>
