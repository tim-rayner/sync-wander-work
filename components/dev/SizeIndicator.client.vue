<template>
    <div class="pointer-events-none absolute bottom-0 left-0 rounded-tr-lg bg-black/60 px-4 py-2 text-white"
         style="z-index: 100;"
         :style="{ bottom: `-${y}px`, left: `${x}px` }">
        <span class="xs:hidden">2XS</span>
        <span class="hidden xs:max-sm:inline">XS</span>
        <span class="hidden sm:max-md:inline">SM</span>
        <span class="hidden md:max-lg:inline">MD</span>
        <span class="hidden lg:max-xl:inline">LG</span>
        <span class="hidden xl:max-2xl:inline">XL</span>
        <span class="max-2xl:hidden">2XL</span>
    </div>
</template>

<script setup lang="ts">
// todo make this purecss? https://dev.to/leapcell/get-screen-size-in-pure-css-3kna?ref=dailydev
const { y, x } = useWindowScroll();
</script>
