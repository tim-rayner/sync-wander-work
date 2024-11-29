
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

        <div class="flex-1 flex flex-col justify-between pt-6">

            <div class="mb-6 ">
                <h2 class="text-xl2 font-medium mb-6">Based on what we've seen, we think you'll love these adventures</h2>
                <div class="grid gap-3 mb-6" style="grid-template-columns: 1fr 1fr;">
                    <div>
                        <img src="https://placehold.co/400x500" alt="" class="block mb-3" />
                        <h3 class="text-sm font-medium">House sitting in Tuscany</h3>
                    </div>
                    <div>
                        <img src="https://placehold.co/400x500" alt="" class="block mb-3" />
                        <h3 class="font-medium text-sm">Sourcing fresh produce with Hannibal Lector</h3>
                    </div>
                </div>
            </div>

            <div class="flex-1 flex justify-end items-end mb-6">
                <Button @click="() => navigateTo('/explorer/onboarding/photos/matches')" label="Take my money!" />
            </div>
        </div>
    </div>
</template>
