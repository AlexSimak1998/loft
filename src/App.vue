<template>
  <div class="app" :style="{ backgroundColor: backgroundColor }">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from '@/v-wrapper.vue'

export default {
  components: {
    Wrapper
  }
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;800&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}


</style>

