
<script setup lang="ts">
import Header from '@/pages/explorer/components/Header.vue';
import Button from '@/pages/explorer/components/Button.vue';

definePageMeta({
    layout: 'empty'
})

enum Method {
    Photos,
    OldSchool
}

const method = ref(Method.Photos);
function navigate() {
    if (method.value === Method.Photos) navigateTo('/explorer/onboarding/photos');
    else navigateTo('/explorer/onboarding/old-school/where');
}

</script>
<template>

    <div class="flex-1 flex flex-col p-6">

        <Header />

        <div class="flex-1 flex flex-col justify-end">
            <div class="mb-6">
                <h2 class="text-xl2 font-medium mb-3">Tell us about yourself</h2>
                <label class="flex flex-row mb-3">
                    <div class="mr-3 mt-1.5">
                        <input type="radio" name="method" v-model="method" :value="Method.Photos" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium">Through photos</h3>
                        <p class="text-xl">Go on. You got this!</p>
                    </div>
                </label>
                <label class="flex flex-row mb-6">
                    <div class="mr-3 mt-1.5">
                        <input type="radio" name="method" v-model="method" :value="Method.OldSchool" />
                    </div>
                    <div>
                        <h3 class="text-xl font-medium">Through words</h3>
                        <p class="text-xl">Yeah, baby! You going old school!</p>
                    </div>
                </label>
                <Button @click="navigate" label="Explore" />
            </div>
        </div>
    </div>
</template>
