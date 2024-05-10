<template>
  <q-page>
    <div class="banner-wrapper">
      <div class="blend"></div>
      <div class="blend2"></div>
      <HeaderComponent />

      <div class="banner">
        <div class="left" style="">
          <div class="left-top">
            <img style="cursor: pointer;" src="img/chat.svg" v-motion :initial="{ opacity: 0, scale: 0 }"
              :enter="{ opacity: 1, scale: 1 }" :hovered="{ scale: 1.1 }" :delay="300" :duration="500" alt="chat" />

            <div class="text-white banner-text" style="font-size: 2rem; margin-bottom: 0.6rem" v-motion
              :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :duration="500">
              최고의 실력을 가진<br />
              외국인 인재를 찾고계신가요?
            </div>

            <p class="banner-text text-white" style="font-size: 1.2rem" v-motion :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, scale: 1 }" :duration="500">
              법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요
            </p>
            <p class="banner-text text-white" style="font-size: 1rem; text-decoration: underline; cursor: pointer;"
              v-motion :initial="{ opacity: 1 }" :enter="{ opacity: 1 }" :duration="500">
              개발자가 필요하신가요? </p>


          </div>

          <div class="left-bottom row justify-between" style="margin-top: 2rem; width: 100%">
            <div class="sub-item" style="" v-motion :initial="{ opacity: 0, }" :enter="{ opacity: 1, scale: 1 }"
              :duration="500" :delay="200">
              <div class="sub-item-header text-white" style="">
                평균 월 120만원
              </div>
              <p class="sub-item-text">
                임금을 해당 국가를 기준으로 계산합니다.
              </p>
            </div>
            <div class="sub-item" style="" v-motion :initial="{ opacity: 0, }" :enter="{ opacity: 1, scale: 1 }"
              :duration="500" :delay="200">
              <div class="sub-item-header text-white" style="">
                평균 월 120만원
              </div>
              <p class="sub-item-text">
                임금을 해당 국가를 기준으로 계산합니다.
              </p>
            </div>
            <div class="sub-item" style="" v-motion :initial="{ opacity: 0, }" :enter="{ opacity: 1, scale: 1 }"
              :duration="500" :delay="200">
              <div class="sub-item-header text-white" style="">
                평균 월 120만원
              </div>
              <p class="sub-item-text">
                임금을 해당 국가를 기준으로 계산합니다.
              </p>
            </div>

          </div>
        </div>

        <div class="right">
          <img src="img/chat2.svg" alt="chat" />
          <HeroCarousel />
        </div>
      </div>
      <div class="slider" style="width: 92%; margin-left: auto" v-motion :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, scale: 1 }" :duration="500">
        <Carousel />
      </div>

      <div class="hero-mobile-only q-pb-xl lt-sm">
        <div class="row">
          <div class="row col-6">
            <div><img src="icons/tick.svg" alt="tick"></div>
            <div class="text-white q-ml-md">한국어 능력</div>
          </div>
          <div class="row col-6">
            <div><img src="icons/tick.svg" alt="tick"></div>
            <div class="text-white q-ml-md">한국어 능력</div>
          </div>
          <div class="row col-6">
            <div><img src="icons/tick.svg" alt="tick"></div>
            <div class="text-white q-ml-md">한국어 능력</div>
          </div>
          <div class="row col-6">
            <div><img src="icons/tick.svg" alt="tick"></div>
            <div class="text-white q-ml-md">한국어 능력</div>
          </div>
        </div>

        <div class="q-pt-md text-weight-bold">
          <a href="#" style="color: rgba(251, 255, 35, 1);">개발자가 필요하신가요?</a>
        </div>
      </div>

    </div>

    <BottomComponent />
  </q-page>
</template>
<script setup>
import Carousel from "src/components/Carousel.vue";
import HeroCarousel from "src/components/HeroCarousel.vue";
import { useMediaQuery } from "../composable";
import BottomComponent from "src/components/BottomComponent.vue";
import HeaderComponent from "src/components/HeaderComponent.vue";
defineOptions({
  name: "IndexPage",
});



const smallScreen = useMediaQuery("(max-width: 1024px)"); // Adjust query as needed
const isSmallScreen = smallScreen.value;
</script>
<style scoped>
.banner-wrapper {
  position: relative;
  background: url("/img/bg.png");

  background-size: cover;
  background-position: center;
  padding-bottom: 4rem;

  @media (max-width: 1024px) {}

  .blend {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right,
        rgba(38, 194, 185, 1),
        rgba(40, 139, 231, 1));
    opacity: 80;
    mix-blend-mode: color-burn;

  }

  .blend2 {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right,
        rgba(38, 194, 185, 1),
        rgba(40, 139, 231, 1));
    opacity: .6;


  }
}

.banner {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 5%;
  padding-left: 8%;

  @media (max-width: 1024px) {
    padding-top: 4rem;
    padding-left: 2rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.left {
  width: 40%;
  margin-right: 3rem;

  @media (max-width: 1024px) {
    /* Medium breakpoint */
    width: 100%;
    margin-right: 0rem;
  }

  @media (max-width: 600px) {
    /* Small breakpoint */
    width: 100%;
    margin-right: 0rem;
  }
}

.right img {
  position: absolute;
  left: 50%;
  cursor: pointer;
  scale: .9;
  transform: translate(-50%, -60%);
  transition: all .5s ease;

  @media (max-width: 1024px) {
    left: 50%;
    top: 0%;
    transform: translate(-50%, -60%);

  }
}

.right img:hover {
  scale: 1.1
}

.right {
  margin-top: 2rem;
  width: 46%;
  position: relative;

  @media (max-width: 1024px) {
    /* Medium breakpoint */
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    /* Small breakpoint */
    width: 100%;
    display: flex;
    align-items: center;
  }
}

.banner-text {
  font-weight: bold;
  width: 100%;
  text-wrap: wrap;

  @media (max-width: 1024px) {
    width: 100%;
  }
}

.sub-item-header {
  font-size: 1.1rem;
  font-weight: bold;
  padding-bottom: 0.2rem;
}

.sub-item-text {
  font-size: 0.8rem;
  color: white;
}

.sub-item {
  border-top: 2px solid white;
  padding-top: 0.5rem;
  width: 30%;
}

.slider {
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
}

.left-bottom {
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
