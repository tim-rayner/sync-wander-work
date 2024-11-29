<script setup lang="ts">
export interface HighlightListingProps {
    img: string;
    title: string;
    location: string;
    rating: number;
}

const { img, title, location, rating } = defineProps<HighlightListingProps>();
</script>

<template>
    <div class="flex relative">
        <div class="overlay bg-gray-800 absolute w-full h-full opacity-50 z-30 rounded-lg"></div>
        <div class="h-full w-full overflow-hidden rounded-lg">
            <img class="listing-img object-cover object-center w-full h-full" :src="img" :alt="title" />
        </div>
        <div class="content justify-center h-full w-full absolute z-40">
            <div class="absolute left-2 top-2">
                <h3 class="text-white">{{ title }}</h3>
                <h5 class="text-white">{{ location }}</h5>
            </div>

            <div class="absolute bottom-2 left-2">
                <div class="flex">
                    <div v-for="i in 5">⭐</div>
                </div>
            </div>
        </div>
    </div>
</template>
