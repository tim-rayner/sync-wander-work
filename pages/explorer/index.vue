
<script setup lang="ts">
definePageMeta({
    layout: 'empty'
})

import Header from '@/pages/explorer/components/Header.vue';
</script>
<template>

    <div class="flex-1 flex flex-col p-6">

        <Header />

        <div class="flex-1 flex flex-col justify-end">
            <div class="mb-6">
                <p class="mb-3 text-xl font-medium">Let's discover your next adventure</p>
                <NuxtLink href="/explorer/onboarding" class="block py-3 px-6 bg-pink-700 text-xl text-white rounded-md text-center font-medium">Explore</NuxtLink>
            </div>
        </div>

    </div>

</template>
