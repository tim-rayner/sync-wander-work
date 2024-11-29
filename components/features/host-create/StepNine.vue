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
    "Outdoor Space",
    "Indoor Space",
    "Parking",
    "Wifi",
    "Kitchen",
    "Bathroom",
    "Laundry",
    "Bedroom",
    "Living Room",
    "Dining Room",
    "Patio",
    "Balcony",
    "Garden",
    "Pool",
    "Hot Tub",
    "Fireplace",
    "Heating",
    "Air Conditioning",
    "Essentials",
    "Shampoo",
    "Hair Dryer",
    "Iron",
    "Laptop Friendly Workspace",
    "TV",
    "Cable TV",
    "Internet",
    "Breakfast",
    "Coffee",
    "Tea",
    "Bike",
    "Surfboard",
    "Boat",
    "Kayak",
    "Canoe",
    "Paddleboard",
    "Snorkeling Gear",
    "Fishing Gear",
    "Hiking Gear",
    "Camping Gear",
    "Ski Gear",
    "Snowboard Gear",
    "Golf Clubs",
    "Tennis Rackets",
    "Basketball",
    "Soccer Ball",
    "Football",
    "Volleyball",
    "Yoga Mat",
    "Weights",
    "Gym",
    "Spa",
    "Sauna",
    "Hot Tub",
    "Pool",
    "Fire Pit",
    "BBQ",
    "Outdoor Kitchen",
    "Outdoor Shower",
    "Outdoor Dining",
    "Outdoor Lounge",
    "Outdoor Games",
    "Outdoor Movie Screen",
    "Outdoor Lighting",
    "Outdoor Sound System",
    "Outdoor Heating",
    "Outdoor Cooling",
    "Outdoor Furniture",
    "Outdoor Decor",
    "Outdoor Plants",
    "Outdoor Art",
    "Outdoor Pets",
    "Outdoor Wildlife",
    "Outdoor Activities",
    "Outdoor Adventure",
    "Outdoor Sports",
    "Outdoor Fitness",
    "Outdoor Relaxation",
    "Outdoor Meditation",
    "Outdoor Yoga",
    "Outdoor Workouts",
    "Outdoor Events",
    "Outdoor Classes",
    "Outdoor Workshops",
    "Outdoor Retreats",
    "Outdoor Festivals",
    "Outdoor Markets",
    "Outdoor Concerts",
    "Outdoor Theater",
    "Outdoor Movies",
    "Outdoor Art Shows",
    "Outdoor Fashion Shows",
    "Outdoor Food Trucks",
    "Outdoor Dining",
    "Outdoor Bars",
    "Outdoor Cafes",
    "Outdoor Restaurants",
    "Outdoor Lounges",
    "Outdoor Clubs",
    "Outdoor Pubs",
    "Outdoor Breweries",
    "Outdoor Wineries",
    "Outdoor Distilleries",
    "Outdoor Vineyards",
    "Outdoor Orchards",
    "Outdoor Farms",
    "Outdoor Gardens",
    "Outdoor Parks",
    "Outdoor Beaches",
    "Outdoor Lakes",
    "Outdoor Rivers",
    "Outdoor Streams",
];
</script>

<template>
    <h2 class="text-4xl mb-3">Tell us what your place has to offer</h2>
    <p>You can add more after you publish your listing</p>

    <!-- DasiyUI badges in a responsive grid layout - clear and concise -->
    <div class="overflow-scroll">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
