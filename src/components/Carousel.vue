<template>
    <Carousel :items-to-show="5" :autoplay="5000" :wrap-around="true">
        <Slide v-for="slide in 10" :key="slide">
            <div class="slider-item">
                <img src="icons/slider-icon.png" style="height: 2.2rem" alt="slider-icon">
                <div class="text-white" style="margin-left: 1rem; font-weight: bold;">해외 마케팅</div>
            </div>
        </Slide>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'CarouselComponent',
    components: {
        Carousel,
        Slide,
    },
})
</script>

<style scoped>
.slider-item {
    width: 15rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    display: flex;
    padding: 0.6rem;
    align-items: center;
}
</style>