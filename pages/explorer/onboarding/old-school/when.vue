
<script setup lang="ts">
import Header from '@/pages/explorer/components/Header.vue';
import Button from "@/pages/explorer/components/Button.vue";

definePageMeta({
    layout: 'empty'
})

enum When {
    date,
    flexible
}
const when = ref<When | null>(null);

</script>
<template>

    <div class="flex-1 flex flex-col p-6">

        <Header :back="true" />

        <div class="flex-1 flex flex-col justify-start pt-6">
            <div class="mb-6">
                <h2 class="text-xl2 font-medium mb-3">When would you like to set off on your adventure?</h2>
                <button @click="() => when = When.date" class="w-full h-full flex flex-row items-center justify-center py-3 px-6 rounded-md mb-3" :class="`${when === When.date ? 'border-2 border-pink-600 bg-pink-100' : 'border-2 border-pink-600'}`">
                    <img src="https://placehold.co/10x10" alt="" class="mr-1.5">
                    <p class="font-medium">Specific date</p>
                </button>
                <button @click="() => when = When.flexible" class="w-full h-full flex flex-row items-center justify-center px-6 py-3 rounded-md" :class="`${when === When.flexible ? 'border-2 border-pink-600 bg-pink-100' : 'border-2 border-pink-600'}`">
                    <img src="https://placehold.co/10x10" alt="" class="mr-1.5">
                    <p class="font-medium">I'm flexible</p>
                </button>
            </div>

            <div class="flex-1 flex flex-col justify-end center mb-6">
                <p v-show="error" class="text-pink-600 text-medium mb-3 text-center">Please select an option to continue</p>
                <Button :disabled="!when" @click="navigateTo('/explorer/onboarding/results')" label="Next" />
            </div>
        </div>
    </div>
</template>
