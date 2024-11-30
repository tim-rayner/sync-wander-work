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
<h1 class="text-center font-bold">Wanderwork</h1>
<button v-if="back" @click="goBack" type="button" class="border border-slate-100 rounded-md py-3">← Back</button>
</header>
</template>
