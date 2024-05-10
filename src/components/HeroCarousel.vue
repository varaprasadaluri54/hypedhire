<template>
    <Carousel3d :perspective="0" :border="0" :width="260" :height="380" :controls-visible="true" :space="200"
        :clickable="true" :autoplay="true" :autoplay-timout="5000">
        <Slide class="bg-white slide" :index="0">
            <CarouselContent />
        </Slide>
        <Slide class="bg-white slide" :index="1">
            <CarouselContent />
        </Slide>
        <Slide class="bg-white slide" :index="2">
            <CarouselContent />
        </Slide>
    </Carousel3d>
</template>

<script setup>
import { defineComponent } from "vue";
import CarouselContent from "./CarouselContent.vue";
</script>

<style scoped>
.slide {
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
</style>