<template>
  <div class="linksnavbar">
    <Burger class="burger"/>
    <ul class="links font-sans" :class="{ active: isMenuOpen }">
      <li v-for="route in routes" :key="route.path">
        <router-link v-if="!route.hidden" class="link" :to="route.path" @click="closeMenu">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from '@/router/routes.js'
import Burger from '@/components/navbar/burger.vue'

export default {
  name: 'linksNavbar',
  data() {
    return {
      routes: routes,
      isMenuOpen: false,
      showSaidBar: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      this.showSaidBar = !this.showSaidBar
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    closeSaidBar() {
      this.showSaidBar = false
    }
  },
  components:{
    Burger
  }
}
</script>

<style>

.links {
  display: flex;
  list-style: none;
  padding: 0;
}

.links .link {
  padding: 8px 15px 10px;
  font-weight: 100;
  font-size: 17px;
  letter-spacing: 1px;
}

.links .link:hover {
  color: rgb(255, 255, 255);
  transition: color 0.3s ease;
}

.router-link-active {
  color: rgb(255, 255, 255);
  position: relative;
  background-image: linear-gradient(to right, transparent, rgb(255, 255, 255), transparent);
  background-position: bottom;
  background-position-y: 37.8px;
  background-size: 100% 1px;
  background-repeat: no-repeat;
}
.burger{
  display: none;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .links {
    display: none;
  }

  .burger{
  display: flex;
}
}
@media (max-width: 767px) {
  .links {
    display: none;
  }

  .burger{
  display: flex;
}

}
</style>