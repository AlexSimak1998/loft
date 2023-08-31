<template>
  <div class="text-center font-bold">
    <h1>Мебель для дома и дачи</h1>
    <div class="bisnes">
      <div
        class="biznesImg"
        @click="openImage('https://i.ibb.co/ryHrTvY/GK0008.jpg')">
        <img src="@/assets/img/Imghomeandgarden/1.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/Nn3qHtg/GK0009.jpg')">
        <img src="@/assets/img/Imghomeandgarden/2.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/hDkwt2P/GK0010.jpg')">
        <img src="@/assets/img/Imghomeandgarden/3.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/ZJ39jJy/GK0012.jpg')">
        <img src="@/assets/img/Imghomeandgarden/4.jpg" alt="" class="img" />
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
