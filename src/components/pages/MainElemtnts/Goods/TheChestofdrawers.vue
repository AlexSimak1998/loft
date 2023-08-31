<template>
  <div class="text-center font-bold">
    <h1>Тумбы-комоды</h1>
    <div class="bisnes">
      <div
        class="biznesImg"
        @click="openImage('https://i.ibb.co/j5gfk3m/1-5.jpg')">
        <img src="@/assets/img/ImgChestofdrawers/1.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/W2NRJDx/6ae1b1ac236faa76b84ad7ba3d3d7fa5.jpg')">
        <img src="@/assets/img/ImgChestofdrawers/2.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/0mcmFvK/8mt2dlymfcvnml6ixqf502r579ghockz.jpg')">
        <img src="@/assets/img/ImgChestofdrawers/3.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/jJWHZrh/7068f30001f7026cd3ca07054268f7a4.jpg')">
        <img src="@/assets/img/ImgChestofdrawers/4.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/rZxB7kw/d85a41b31983393df1f10179a2jp-dlya-doma-i-interera-komod-loft.jpg')">
        <img src="@/assets/img/ImgChestofdrawers/5.jpg" alt="" class="img" />
      </div>
      <div class="biznesImg" @click="openImage('https://i.ibb.co/9VdxHDc/f2c3886703906c0a0714bbcd066f76f5.jpg')">
        <img src="@/assets/img/ImgChestofdrawers/6.jpg" alt="" class="img" />
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
