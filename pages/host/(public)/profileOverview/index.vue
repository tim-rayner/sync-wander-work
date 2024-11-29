<script setup>
import { ref } from "vue";

// Placeholder for model data
const model = ref({
    location: {
        lat: 0,
        lng: 0,
    },
    firstResovationType: "any",
    bookingSettings: "instantBook",
    accomDescription: "A cozy farmhouse nestled in the countryside, offering private rooms and shared meals",
    workloadCatagory: "farm",
    workplaceTitle: "Sustainable Organic Farming Project",
    workplacePhotos: [
        "https://example.com/photo1.jpg",
        "https://example.com/photo2.jpg",
        "https://example.com/photo3.jpg",
    ],
    workplaceOfferings: {
        mealsIncluded: true,
        privateRoom: true,
        wifi: false,
        transportation: false,
    },
});

function handleEnhanceProfile() {
    alert("Feature to enhance profile coming soon!");
}
</script>

<template>
    <div class="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold mb-4">Your Host Profile Summary</h1>
        <div class="mb-6">
            <p class="text-lg">
                🌍 <strong>Location:</strong> Latitude {{ model.location.lat }}, Longitude {{ model.location.lng }}
            </p>
            <p class="text-lg">
                🏠 <strong>Accommodation Description:</strong> {{ model.accomDescription || "No description provided" }}
            </p>
            <p class="text-lg">🛠 <strong>Workload Category:</strong> {{ model.workloadCatagory }}</p>
            <p class="text-lg">
                ✨ <strong>Workplace Title:</strong> {{ model.workplaceTitle || "No title provided" }}
            </p>
        </div>
        <div class="mb-4">
            <h2 class="text-xl font-semibold">Suggestions to Improve Your Profile:</h2>
            <ul class="list-disc pl-6">
                <li v-if="!model.accomDescription">
                    Add a compelling description of your accommodation to attract volunteers.
                </li>
                <li v-if="model.workplacePhotos.length === 0">
                    Upload photos of your workplace to make it more visually appealing.
                </li>
                <li v-if="!model.workplaceTitle">
                    Provide a workplace title that highlights the unique aspect of your offering.
                </li>
                <li>
                    Consider detailing the workload and expectations for better alignment with potential volunteers.
                </li>
            </ul>
        </div>
        <div>
            <h2 class="text-xl font-semibold">Summary</h2>
            <p>
                Based on your inputs, we suggest enhancing your profile with vivid descriptions and visuals to attract
                the right audience. Highlight your unique offerings to ensure volunteers connect with your values and
                needs.
            </p>
        </div>
        <button class="btn btn-primary mt-6" @click="handleEnhanceProfile">Enhance My Profile</button>
    </div>
</template>

<style scoped>
/* Optional: Add custom styling if needed */
</style>
