
<template>
  <div class="swiper-container">
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation @swiper="onSwiper"
      @slideChange="onSlideChange" class="sliders">
      <SwiperSlide v-for="n in 4" :key="n" virtualIndex="n" class="slideswipe">
        <img src="https://img.freepik.com/free-photo/skilled-self-employed-carpenter-working-with-wood-in-carpentry-workshop-interior_1163-3111.jpg?w=1060&t=st=1689922745~exp=1689923345~hmac=592df8f02ebd1bf2352ee8a72f79656b2c153ee1651557fcddc9d2cc6eeb265f" alt="">
        <div class="Social">
        </div>
      </SwiperSlide>
    </swiper>
    <div class="swiper-button-prev sty" aria-label="Previous slide" @click="prevSlide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        width="50px" height="50px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>

    </div>
    <div class="swiper-button-next sty" aria-label="Next slide" @click="nextSlide">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      width="50px" height="50px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>

    </div>
  </div>
  
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let swiperInstance = null;

    const onSwiper = (swiper) => {
      swiperInstance = swiper;
    };

    const onSlideChange = () => {
      console.log("slide change");
    };

    const prevSlide = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      }
    };

    const nextSlide = () => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    };

    return {
      onSwiper,
      onSlideChange,
      prevSlide,
      nextSlide,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
.slideswipe{
  position: relative;
}

.Social{
  position: absolute;
  top: 0;
  right: 0;
  margin: 170px 20px;
}

.nw{
  margin: 18px 0;
}

.swiper-container {
  position: relative;
  margin: 0 auto 32px;
  max-width: 600px;
  height: 500px;
}



.swiper-button-next,
.swiper-button-prev {
  backdrop-filter: blur(10px);
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 520px;
  transform: translateY(-50%);
  cursor: pointer;
  width: 100px;
  height: 50px;
  color: rgba(194, 194, 194, 0.71);

}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: rgba(73, 73, 73, 0.586);
  transition: all 0.7s;

}

.swiper-button-prev {
  left: 400px;
}

.swiper-button-next {
  right: 0px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  display: none;
}

@media screen and (max-width: 768px) {

  .swiper-container,
  img {
    max-width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>