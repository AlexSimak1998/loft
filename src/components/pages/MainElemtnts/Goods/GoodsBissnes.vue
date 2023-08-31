<template>
  <div class="text-center font-bold">
    <h1>Мебель для баров и ресторанов</h1>
    <div class="bisnes">
      <div
        class="biznesImg"
        @click="openImage('https://i.ibb.co/C82vhyk/photo-2023-08-14-10-50-17.jpg')"
      >
        <img src="@/assets/img/imgBissnes/1.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/5YtzkLk/photo-2023-08-14-10-50-19.jpg')">
        <img src="@/assets/img/imgBissnes/2.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/yYFkYC0/photo-2023-08-14-10-50-21.jpg')">
        <img src="@/assets/img/imgBissnes/3.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/jDXC9Qk/photo-2023-08-14-10-50-25.jpg')">
        <img src="@/assets/img/imgBissnes/7.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/C7pVZZS/photo-2023-08-14-10-50-22.jpg')">
        <img src="@/assets/img/imgBissnes/4.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/SPmrqcC/photo-2023-08-14-10-50-24.jpg')">
        <img src="@/assets/img/imgBissnes/6.jpg" alt="" class="img" />
      </div>
     
    </div>
  </div>
  <div v-if="showModal" class="modal" @click="showModal = false">
    <img :src="currentImage" alt="Full Screen Image" class="modal-image" />
  </div>
  <MyFooter />
</template>
<style scoped>
.img {
  width: 100%;
  height: 300px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.915);
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
