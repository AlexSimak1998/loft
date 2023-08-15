<template>
  <div class="text-center font-bold">
    <h1>Мебель для баров и ресторанов</h1>
    <div class="bisnes">
      <div
        class="biznesImg"
        @click="
          openImage(
            'https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.2.601144753.1689060487&semt=sph'
          )
        "
      >
        <img src="@/assets/img/imgBissnes/1.jpg" alt="" />
      </div>
      <div class="biznesImg" @click="openImage('@/assets/img/imgBissnes/2.jpg')">
        <img src="@/assets/img/imgBissnes/2.jpg" alt="" />
      </div>
      <div class="biznesImg" @click="openImage('@/assets/img/imgBissnes/3.jpg')">
        <img src="@/assets/img/imgBissnes/3.jpg" alt="" />
      </div>
      <div class="biznesImg" @click="openImage('@/assets/img/imgBissnes/7.jpg')">
        <img src="@/assets/img/imgBissnes/7.jpg" alt="" />
      </div>
    </div>
  </div>
  <div v-if="showModal" class="modal" @click="showModal = false">
    <img :src="currentImage" alt="Full Screen Image" class="modal-image" />
  </div>
  <MyFooter />
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
}
.bisnes {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0 0 100px;
}
h1 {
  font-size: 50px;
  margin-bottom: 30px;
  color: white;
}

.biznesImg {
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
}
.biznesImg:hover {
  transform: scale(1.05);
}

@media (min-width: 768px) and (max-width: 1023px) {
  .bisnes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  h1 {
    font-size: 35px;
  }
}

@media screen and (max-width: 768px) {
  .bisnes {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  h1 {
    font-size: 17px;
  }
}
</style>
<script>
import MyFooter from '@/components/elements/myFooter.vue'

export default {
  components: {
    MyFooter
  },
  data() {
    return {
      showModal: false,
      currentImage: ''
    }
  },
  methods: {
    openImage(imageSrc) {
      this.currentImage = imageSrc
      this.showModal = true
    }
  }
}
</script>
