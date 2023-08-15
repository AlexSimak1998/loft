
<template>
    <div class="wrapper">
        <Navbar class=" flex" />
        <router-view />
    </div>
</template>

<style>
.wrapper {
    background:rgb(38, 35, 36);
    border: 0 solid #e5e7eb;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .wrapper {
    padding: 0 25px ;
  }
}
@media (max-width: 767px) {
  .wrapper {
    padding: 0 25px ;
  }
}

</style>


<script>
import Navbar from '@/components/navbar/v-navbar.vue';

export default {
    components: {
    Navbar,
}
}

</script>