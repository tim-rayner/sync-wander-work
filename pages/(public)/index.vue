<script setup lang="ts">
import HomeHero from "@/components/features/home/HomeHero.vue";
import AboutUs from "@/components/features/home/AboutUs.vue";
import ShowcaseCarousel from "@/components/ShowcaseCarousel.vue";
</script>

<template>
    <div>
        <HomeHero />
        <div class="container">
            <ShowcaseCarousel />
            <AboutUs />
        </div>
    </div>
</template>
