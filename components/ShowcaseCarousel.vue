<script setup lang="ts">
import ShowcaseListing from "@/components/ShowcaseListing.vue";
</script>

<template>
    <div class="flex flex-row my-12 cursor-grab">
        <div class="w-[500px] h-[250px] flex flex-col mx-2">
            <ShowcaseListing
                img="https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=600"
                :rating="5"
                title="Mountain Ranch Stay"
                location="French Alps"
            />
        </div>
        <div class="w-[500px] h-[250px] flex flex-col mx-2">
            <ShowcaseListing
                img="https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&w=600"
                :rating="5"
                title="Farmhouse"
                location="Texas"
            />
        </div>
        <div class="w-[500px] flex flex-col mx-2">
            <ShowcaseListing
                img="https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=600"
                :rating="5"
                title="Vineyard"
                location="French Alps"
            />
        </div>
    </div>
</template>
