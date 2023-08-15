<template>
   <div class="Contacts">
     <h1>Карточка предприятия</h1>
   </div>
   <MyFooter/>
</template>

<style scoped>
.Contacts{
  text-align: center;
  height: 600px;
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
