<template>
    <div class="image-uploader">
        <input type="file" multiple accept="image/*" @change="handleFileChange" />
        <div v-if="previewImages.length" class="image-preview">
            <div v-for="(image, index) in previewImages" :key="index" class="image-wrapper">
                <img :src="image" alt="Preview" class="preview-image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, onMounted } from "vue";

const props = defineProps({
    initialImages: {
        type: Array as PropType<string[]>,
        default: () => [],
    },
});

const previewImages = ref([]);
const emit = defineEmits(["update-images"]); // Emits the array of image URLs

onMounted(() => {
    // Initialize previewImages with initialImages
    previewImages.value = props.initialImages;
});

function handleFileChange(event) {
    const files = Array.from(event.target.files);

    // Reset the preview array
    previewImages.value = [];

    // Read each file and generate its URL
    files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
            // Push the image URL to the preview array
            previewImages.value.push(reader.result);
            // Emit the updated array
            emit("update-images", previewImages.value);
        };
        reader.readAsDataURL(file); // Read file as data URL
    });
}
</script>

<style>
.image-uploader {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.image-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-wrapper {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
