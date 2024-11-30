<script setup lang="ts">
defineProps<{
    back?: true;
}>();

function goBack() {
    history.back();
}

</script>
<template>
<header class="">
<h1 class="text-center font-bold"><img src="/assets/image/wanderwork-black.png" alt="Wanderwork" class="block w-48 mx-auto"></h1>
<button v-if="back" @click="goBack" type="button" class="border border-slate-100 rounded-md py-3">← Back</button>
</header>
</template>
