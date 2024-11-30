<script setup lang="ts">
import LogoLight from "@/assets/image/wanderwork-white.png";
import LogoDark from "@/assets/image/wanderwork-black.png";

const props = defineProps<{
    dark: boolean;
    minimal: boolean;
}>();
const animationIsLive = ref(false);

if (import.meta.client) {
    onMounted(() => {
        animationIsLive.value = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
}

const { y: yScroll } = useWindowScroll();
const route = useRoute();
const isHomePage = computed(() => route.path === "/");

const logoSrc = computed(() => {
    return props.dark || (yScroll.value > 20 && animationIsLive.value) ? LogoDark : LogoLight;
});
</script>

<template>
    <div
        class="sticky top-0 z-50 w-full h-[75px] bg-transparent py-2 shadow-none transition-all duration-500 flex items-center"
        :class="{
            'text-white': isHomePage && yScroll < 20,
            'bg-white !shadow-lg ': !isHomePage || (yScroll > 20 && animationIsLive),
            ' !bg-transparent !shadow-none': props.dark,
        }"
    >
        <header class="container flex items-center justify-center h-full">
            <div class="flex items-center justify-between content-center w-full">
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex items-center">
                        <img :src="logoSrc" alt="Wanderwork" class="h-8 w-auto" />
                    </NuxtLink>
                </div>

                <div class="flex items-center justify-end">
                    <NuxtLink to="/about" class="mx-2">About</NuxtLink>
                    <NuxtLink to="/contact" class="mx-2">Contact</NuxtLink>
                    <NuxtLink to="/login" class="mx-2">Login</NuxtLink>
                </div>
            </div>
        </header>
    </div>
</template>
