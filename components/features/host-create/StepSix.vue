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

// Add a property to localModel for the selected highlights
localModel.selectedHighlights = localModel.selectedHighlights || [];

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

<!-- enum workloadCatagory {
    farm = "Farm",
    houseSitting = "House Sitting",
    dogSitting = "Dog Sitting",
    aqua = "Aqua/Marine",
} -->
<template>
    <h3 class="mb-3">Step 4</h3>
    <h2 class="text-4xl mb-3">Next, lefts describe your workload</h2>

    <!-- loop through enum workloadCatagory then display pills -->
    <div>
        <p>Choose up to 2 highlights. We'll use these to get your description started</p>
        <div>
            <div>
                <input type="checkbox" id="farm" value="Farm" v-model="localModel.selectedHighlights" />
                <label for="farm">Farm</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="houseSitting"
                    value="House Sitting"
                    v-model="localModel.selectedHighlights"
                />
                <label for="houseSitting">House Sitting</label>
            </div>
            <div>
                <input type="checkbox" id="dogSitting" value="Dog Sitting" v-model="localModel.selectedHighlights" />
                <label for="dogSitting">Dog Sitting</label>
            </div>
            <div>
                <input type="checkbox" id="aqua" value="Aqua/Marine" v-model="localModel.selectedHighlights" />
                <label for="aqua">Aqua/Marine</label>
            </div>
        </div>
    </div>
</template>
