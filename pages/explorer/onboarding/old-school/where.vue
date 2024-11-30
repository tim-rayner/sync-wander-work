
<script setup lang="ts">
import Header from '@/pages/explorer/components/Header.vue';
import Button from "~/pages/explorer/components/Button.vue";

definePageMeta({
    layout: 'empty'
})

const selected = ref<number[]>([]);
const options = [
    'Anywhere', 'Tropical','Countryside', 'Desert', 'Cold climate', 'Nature'
]

</script>
<template>

    <div class="flex-1 flex flex-col p-6">

        <Header :back="true" />

        <div class="flex-1 flex flex-col justify-start pt-6">
            <div class="mb-6">
                <h2 class="text-xl2 font-medium mb-3">Where would you like to wander?</h2>
                <div class="grid grid-cols-3 gap-3 mb-6">
                    <button v-for="(option, index) in options" :key="index" @click="selected.includes(index) ? selected.splice(selected.indexOf(index), 1) : selected.push(index)" class="w-full h-full flex flex-col items-center justify-center">
                        <img  src="https://placehold.co/400x400" alt="" class="block mb-0.5" :class="{'border-4 border-pink-700' : selected.includes(index)}" />
                        <p class="font-medium">{{ option }}</p>
                    </button>
                </div>
            </div>

            <div class="flex-1 flex justify-end items-end mb-6">
                <Button :disabled="!selected.length" @click="navigateTo('/explorer/onboarding/old-school/why')" label="Next" />
            </div>
        </div>
    </div>
</template>
