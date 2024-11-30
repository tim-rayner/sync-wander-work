<script setup lang="ts">
import video from "@/assets/video/bg-vid1.mp4";

//redirect with router
</script>

<template>
    <div class="relative -mt-[77px] h-[105vh] flex items-center justify-center">
        <div class="overlay bg-gray-800 absolute w-full h-full opacity-50 z-30"></div>
        <video
            autoplay
            muted
            loop
            playsinline
            :src="video"
            class="object-cover object-center w-full h-full"
            playbackRate="0.65"
        />
        <div class="content absolute z-40 text-center text-white">
            <h1 class="font-bold text-5xl">work a little, wander a lot</h1>
            <p class="text-2xl mt-3">start your journey today</p>
            <div class="relative flex justify-center mt-12">
                <NuxtLink
                    to="/host/profileCreate"
                    class="flex items-center justify-center w-full py-3 px-6 bg-black text-xl text-white rounded-md text-center font-medium mx-3"
                    >host</NuxtLink
                >
                <NuxtLink
                    to="/explorer"
                    class="block w-full py-3 px-6 bg-pink-700 text-xl text-white rounded-md text-center font-medium mx-3"
                    >wanderer</NuxtLink
                >
            </div>
        </div>
    </div>
</template>
