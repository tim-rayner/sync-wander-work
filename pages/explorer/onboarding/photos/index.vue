
<script setup lang="ts">
import Header from '@/pages/explorer/components/Header.vue';
import Button from '@/pages/explorer/components/Button.vue';

definePageMeta({
    layout: 'empty'
})

</script>
<template>

    <div class="flex-1 flex flex-col p-6">

        <Header :back="true" />

        <div class="flex-1 flex flex-col justify-start pt-6">
            <div class="mb-6">
                <h2 class="text-xl2 font-medium mb-3">Select photos and we'll do the rest</h2>
                <p class="text-base mb-6">With a little bit of AI magic we'll use your photos to help you find your perfect matches.</p>
                <Button @click="() => navigateTo('/explorer/onboarding/photos/select')" label="Continue" />
            </div>
        </div>
    </div>
</template>
