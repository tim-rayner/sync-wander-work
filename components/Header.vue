<template>
    <div
        class="sticky top-0 z-50 w-full h-[75px] bg-transparent py-2 shadow-none transition-all duration-500 flex items-center"
        :class="{
            'text-white': isHomePage && yScroll < 20,
            'bg-white !shadow-lg ': !isHomePage || (yScroll > 20 && animationIsLive),
        }"
    >
        <header class="container flex items-center justify-center h-full">
            <div class="flex items-center justify-between content-center w-full">
                <div class="flex items-center">
                    <NuxtLink to="/" class="flex items-center">
                        <!-- <Logo class="h-8 w-auto" /> -->
                        <span class="ml-2 text-xl font-bold">WanderWork</span>
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

<script setup lang="ts">
const animationIsLive = ref(false);

if (import.meta.client) {
    onMounted(() => {
        animationIsLive.value = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });
}

const { y: yScroll } = useWindowScroll();
const route = useRoute();
const isHomePage = computed(() => route.path === "/");
</script>
