<template>
    <div class="sticky top-0 z-40 w-full bg-transparent py-2 shadow-none transition-all duration-500"
         :class="{ 'bg-white !shadow-lg': yScroll > 20 && animationIsLive }">
        <header class="container">
            heading
        </header>
    </div>
</template>

<script setup lang="ts">
const animationIsLive = ref(false);

if (import.meta.client) {
    onMounted(() => {
        animationIsLive.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
}

const { y: yScroll } = useWindowScroll();
</script>
