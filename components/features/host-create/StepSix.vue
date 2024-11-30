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
    <h3 class="mb-3">step 4</h3>
    <h2 class="text-4xl mb-3">next, lefts describe your workload</h2>

    <!-- loop through enum workloadCatagory then display pills -->
    <div>
        <p>choose up to 2 highlights. we'll use these to get your description started</p>
        <div>
            <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
                <input type="checkbox" id="home" value="home" v-model="localModel.selectedHighlights" />
                <label for="home" class="text-lg">home improvements</label>
            </div>

            <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
                <input type="checkbox" id="gardening" value="gardening" v-model="localModel.selectedHighlights" />
                <label for="gardening" class="text-lg">gardening</label>
            </div>

            <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
                <input type="checkbox" id="houseSitting" value="houseSitting" v-model="localModel.selectedHighlights" />
                <label for="houseSitting" class="text-lg">house sitting</label>
            </div>

            <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
                <input type="checkbox" id="tech" value="tech" v-model="localModel.selectedHighlights" />
                <label for="tech" class="text-lg">tech</label>
            </div>

            <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
                <input type="checkbox" id="animalCare" value="animalCare" v-model="localModel.selectedHighlights" />
                <label for="animalCare" class="text-lg">animal care</label>
            </div>

            <div class="border rounded-lg px-5 py-2 my-5 flex items-center gap-2">
                <input type="checkbox" id="labour" value="labour" v-model="localModel.selectedHighlights" />
                <label for="labour" class="text-lg">labour</label>
            </div>
        </div>
    </div>
</template>
