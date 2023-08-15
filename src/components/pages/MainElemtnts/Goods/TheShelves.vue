<template>
 <div class="text-center font-bold">
    <h1>Полки на стены</h1>
       <div class="bisnes">
        <div class="biznesImg">
            <img src="@/assets/img/imgB/042003a7f8e2_1200_1200.jpg" alt="">
        </div>
        <div class="biznesImg">
            <img src="@/assets/img/imgB/042003a7f8e2_1200_1200.jpg" alt="">
        </div>
        <div class="biznesImg">
            <img src="@/assets/img/imgB/042003a7f8e2_1200_1200.jpg" alt="">
        </div>
        <div class="biznesImg">
            <img src="@/assets/img/imgB/042003a7f8e2_1200_1200.jpg" alt="">
        </div>
        <div class="biznesImg">
            <img src="@/assets/img/imgB/042003a7f8e2_1200_1200.jpg" alt="">
        </div>
        <div class="biznesImg">
            <img src="@/assets/img/imgB/042003a7f8e2_1200_1200.jpg" alt="">
        </div>
    </div>
 </div>
         <MyFooter/>
</template>
<style scoped>
.bisnes{
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
    padding: 0 0 100px;
}
h1 {
  font-size: 50px;
  margin-bottom: 30px;
  color: white;
}

.biznesImg{
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
}
.biznesImg:hover{
  transform: scale(1.05);
}
@media (min-width: 768px) and (max-width: 1023px) {
  .bisnes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  h1{
    font-size: 35px;
  }
}

@media screen and (max-width: 768px) {
  .bisnes {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
   h1{
    font-size: 17px;
  }
}
</style>
<script>

import MyFooter from '@/components/elements/myFooter.vue'

export default{
    components:{
        MyFooter
    }
}
</script>
