<script setup>
import { ref } from "vue";

definePageMeta({
    layout: "on-boarding-minimal",
});

// Placeholder for model data
const model = ref({
    location: {
        lat: 52.8302,
        lng: "0.8470",
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
    <div class="flex-1 flex flex-col p-6 container">
        <p class="text-sm mb-6 text-center md:text-left">
            Based on your input, wanderwork's generative ai has curated what your profile
            <strong>could</strong> look like on our platform:
        </p>
        <div class="flex flex-col justify-between pt-3 border-2 rounded-lg shadow-lg pb-3 px-3">
            <div class="mb-2">
                <div>
                    <h3 class="font-bold text-xl mb-3">vineyard grape picking with Jean & Colette</h3>
                    <div class="relative mb-6">
                        <img
                            src="https://images.pexels.com/photos/225229/pexels-photo-225229.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                            class="block mb-3 rounded-md"
                        />
                        <p class="absolute top-4 left-4 bg-white rounded-md p-1.5 text-slate-950 text-sm">
                            3-4 hrs/day
                        </p>
                        <span class="absolute top-4 right-4 w-6 h-6 rounded-md text-pink-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    fill="#be185d"
                                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div class="flex flex-row mb-6">
                        <div class="w-20 shrink-0 mr-3">
                            <img
                                src="https://images.pexels.com/photos/5637731/pexels-photo-5637731.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                class="block w-20 h-20 rounded-full object-cover"
                            />
                        </div>
                        <div class="border border-gray-300 rounded-xl p-3">
                            <h3 class="text-base font-medium mb-1.5">Jean and Colette</h3>
                            <p class="text-sm">
                                Both retired for 15 years, Jean and Colette love meeting people from all over the world
                                and need a lot of help.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <NuxtLink
            to="/"
            class="block w-full py-3 px-6 bg-pink-700 text-xl text-white rounded-md text-center font-medium mt-12"
        >
            Enhance my profile
        </NuxtLink>
    </div>
</template>
