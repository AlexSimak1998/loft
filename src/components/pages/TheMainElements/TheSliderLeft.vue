<template>
  <div class="flex flex-col slederLeft">
    <div class="x">
      <swiper
        :direction="'vertical'"
        :pagination="{
          clickable: true
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img
            src="https://img.freepik.com/free-photo/wooden-table-with-wheels-in-kitchen_23-2148848660.jpg?size=626&ext=jpg&uid=R106260722&ga=GA1.2.601144753.1689060487&semt=ais"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://img.freepik.com/free-photo/beautiful-shot-of-a-wooden-modern-shelf-isolated-on-a-white-background_181624-25237.jpg?size=626&ext=jpg&uid=R106260722&ga=GA1.2.601144753.1689060487&semt=ais"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://img.freepik.com/free-photo/beautiful-shot-of-a-wooden-modern-shelf-isolated-on-a-white-background_181624-25237.jpg?size=626&ext=jpg&uid=R106260722&ga=GA1.2.601144753.1689060487&semt=ais"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://img.freepik.com/free-photo/beautiful-shot-of-a-wooden-modern-shelf-isolated-on-a-white-background_181624-25237.jpg?size=626&ext=jpg&uid=R106260722&ga=GA1.2.601144753.1689060487&semt=ais"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script scoped>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    }
  }
}
</script>

<style>
.x {
  overflow: hidden;
  width: 100%;
  margin: 60px 0 100px;
}

.mySwiper {
  width: 300px;
  height: 450px;
  background: rgb(116, 112, 112);
  overflow: visible;
}

.mySwiper .swiper-pagination-bullet {
  width: 15px;
  padding-top: 10px;
  height: 15px;
  background-color: rgb(213, 213, 213);
  border: 2px solid rgb(175, 175, 175);
}

.mySwiper .swiper-pagination-bullet-active {
  background-color: rgb(149, 148, 148);
}

.mySwiper .swiper-pagination-bullet.swiper-pagination-bullet-active,
.mySwiper .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  margin-top: 40px;
  position: relative;
  left: -310px;
  top: 0;
}

@media screen and (max-width: 768px) {

.mySwiper .swiper-pagination-bullet.swiper-pagination-bullet-active,
.mySwiper .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  margin-top: 30px;
  position: relative;
  left: -260px;
  top: 0;
}

.mySwiper .swiper-pagination-bullet {
  width: 15px;
  padding-top: 10px;
  height: 15px;
  background-color: rgb(56, 55, 55);
  border: 2px solid rgb(175, 175, 175);
}

.mySwiper .swiper-pagination-bullet-active {
  background-color: rgb(65, 64, 64);
}
}
</style>