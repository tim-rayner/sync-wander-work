
<script setup lang="ts">
import Header from '@/pages/explorer/components/Header.vue';
import Button from '@/pages/explorer/components/Button.vue';
import Heart from '@/pages/explorer/components/Heart.vue';

definePageMeta({
    layout: 'empty'
});

const selected = ref([0, 1, 2, 3, 4, 5, 6, 7]);
const images = Array.from({ length: 11 }, (_, i) => i);
const loading = ref(false);

function discover() {
    loading.value = true;
    setTimeout(() => {
        navigateTo('/explorer/onboarding/results');
    }, 2000);
}

</script>
<template>

    <div class="flex-1 flex flex-col p-6">

        <Header :back="true" />

        <div v-show="loading" class="flex-1 flex flex-col justify-center items-center pt-6 text-pink-700">
            <Heart />
            <p class="text-pink-700 text-centermt-3">Working...</p>
        </div>

        <div v-show="!loading" class="flex-1 flex flex-col justify-start pt-6">
            <div class="mb-6">
                <div class="grid grid-cols-3 gap-3 mb-6">
                    <button v-for="(image, index) in images" @click="selected.includes(index) ? selected.splice(selected.indexOf(index), 1) : selected.push(index)" class="w-full h-full flex items-center justify-center">
                        <img  src="https://placehold.co/400x400" alt="" :class="{'border-4 border-pink-700' : selected.includes(index)}" />
                    </button>
                </div>
            </div>

            <div class="flex-1 flex justify-end items-end mb-6">
                <Button @click="discover" label="Discover" />
            </div>
        </div>
    </div>
</template>
