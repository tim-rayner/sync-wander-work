<script setup lang="ts">
import video from "@/assets/video/bg-vid1.mp4";
</script>

<template>
    <div class="relative -mt-[77px] h-[65vh] flex items-center justify-center">
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
            <h1 class="font-bold text-5xl">SLOGAN GOES HERE</h1>
            <p class="text-lg mt-3">Subtext goes here</p>
            <div class="relative flex justify-center mt-12">
                <button class="btn btn-accent">Start Working</button>
                <button class="btn btn-active ml-3">Start Hosting</button>
            </div>
        </div>
    </div>
</template>
