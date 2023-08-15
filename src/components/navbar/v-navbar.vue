
<template>
  <div class="navbar flex justify-between items-center">
  <h1>Столярная мастерская</h1>
    <linksNavbar />
  </div>
</template>
   

<script>
import linksNavbar from '@/components/navbar/v-linksNavbar.vue'

export default {
  components: {
    linksNavbar
  }
}
</script>

<style scoped>
.navbar {
  color: white  ;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  font-size: 38px;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .navbar {
    padding:25px ;
  }
}

@media (max-width: 767px){

  h1{
    font-size: 23px;
  }
}
</style>

