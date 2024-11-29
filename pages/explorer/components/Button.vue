<script setup lang="ts">
defineProps<{
    label: string;
}>();
defineEmits<{
    click: [];
}>();

</script>
<template>
    <button @click="$emit('click')" type="button" class="block w-full py-3 px-6 bg-pink-600 text-xl text-white rounded-md text-center font-medium">
        {{ label }}</button>
</template>
