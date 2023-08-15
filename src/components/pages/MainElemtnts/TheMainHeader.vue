<template>
  <div class="mainHeader">
    <div class="b2">
      <img src="../../../assets/img/logo.png" class="logo" />
      <p class="mainText">От творческой мысли к непревзойденной реальности!</p> 
      <div>
        <my-button @click="showModal = true" class="btn"> Связаться </my-button>
        <modal v-model:showModal="showModal"></modal>
      </div>
    </div>
    <div class="b1 text-center"></div>
  </div>
</template>

<script>
import Modal from '@/components/elements/MyModal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>


<style scoped>
.b2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mainText {
  text-align: center;
  font-size: 47px;
}
.mainHeader {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 50px;
  background: url(https://phonoteka.org/uploads/posts/2021-05/1621705089_15-phonoteka_org-p-fon-dlya-stolyarnoi-masterskoi-15.jpg);
  border-radius:25px ;
  height:730px;
  color: white;
}

.btn {
  margin: 40px;
}

.logo {
  width: 300px;
  height: 300px;
}

.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mainHeader {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: 500px;
  }

  .logo {
    width: 150px;
    height: 150px;
    margin-top: 30px;
  }

  .mainText {
    font-size: 34px;
    margin-top: 10px;
  }

  .btn {
    margin: 30px 0;
  }

  .mainHeader {
    margin-bottom: 100px;
  }

}  
@media (max-width: 767px){
    .mainHeader {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: 500px;
  }
    .mainText {
    font-size: 24px;
    }
    .btn {
    margin: 20px 0;
  }
}
</style>

