<template>
  <div class="mainDesign">
    <div class="designBlock1"></div>
    <div class="designBlock2">
      <h1 class="text-center font-bold">Мебель для баров и ресторанов</h1>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="currentColor"
        class="bi bi-arrow-right-circle mt-10"
        viewBox="0 0 16 16"
        @click="GoodsBiznes()"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        />
      </svg>
    </div>
    <div class="designBlock3">
      <h1 class="text-center font-bold">Мебель для дома и дачи</h1>
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="currentColor"
        class="bi bi-arrow-right-circle mt-10"
        viewBox="0 0 16 16"
             @click="Home()"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        />
      </svg>
    </div>
    <div class="designBlock4"></div>
  </div>
</template>

<script>
export default{
  methods:{
    GoodsBiznes(){
    this.$router.push('/GoodsBissnes')
    },
    Home(){
    this.$router.push('/TheForHome')
    },

  }
}
</script>


<style scoped>
.bi:hover{
  color: rgb(106, 106, 106);
  transition: 0.5s;
  cursor: pointer;
}
h1 {
  font-size: 45px;
}
.mainDesign {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px 0 50px;
}
.designBlock1 {
  border-radius: 25px 0 0 0;
  height: 400px;
  background: url('@/assets/img/006.jpg');
  background-size: cover;
}
.designBlock2 {
  border-radius: 0 25px 0 0;
  background: rgb(243, 243, 243);
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.designBlock3 {
  border-radius: 0 0 0 25px;
  background: rgb(51, 46, 41);
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.designBlock4 {
  border-radius: 0 0 25px 0;
  background: url('@/assets/img/1-62.jpg');
  background-size: cover;
  height: 400px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .mainDesign {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 50px 0 100px;
  }

  .designBlock1 {
    border-radius: 25px 25px 0 0;
  }
  .designBlock2 {
    border-radius: 0;
  }
  .designBlock3 {
    border-radius: 0;
  }
  .designBlock4 {
    border-radius: 0 0 25px 25px;
  }
}
@media (max-width: 767px) {
  .mainDesign {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 50px 0 100px;
  }
  h1 {
    font-size: 25px;
  }
  .designBlock1 {
    border-radius: 25px 25px 0 0;
  }
  .designBlock2 {
    border-radius: 0;
  }
  .designBlock3 {
    border-radius: 0;
  }
  .designBlock4 {
    border-radius: 0 0 25px 25px;
  }
}
</style>
