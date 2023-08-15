<template>
  <div>
    <div class="burger-menu" @click="toggleMenu" v-show="!showSaidBar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <transition name="slide">
      <div class="saidBar" v-if="showSaidBar">
        <div class="saidBar-content" @click.stop>
          <span @click="closeSaidBar">x</span>
          <ul>
            <li  v-for="route in routes" :key="route.path">
              <router-link v-if="!route.hidden"  :to="route.path" @click="closeMenu">{{ route.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import routes from '@/router/routes.js'
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
      this.isMenuOpen = !this.isMenuOpen;
      this.showSaidBar = !this.showSaidBar;

      if (this.showSaidBar) {
        document.documentElement.classList.add('body-scroll-lock');
      } else {
        document.documentElement.classList.remove('body-scroll-lock');
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.showSaidBar = false;
      document.documentElement.classList.remove('body-scroll-lock');
    },
    closeSaidBar() {
      this.showSaidBar = false;
      document.documentElement.classList.remove('body-scroll-lock');
    },
    onLinkClick() {
      this.closeMenu();
    }
  }
}
</script>
<style>
html.body-scroll-lock {
  overflow: hidden;
}
span {
  font-size: 30px;
  position: absolute;
  right: 30px;
  top: 12px;
}
.burger-menu,
.saidBar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 99;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: black;
  transition: transform 0.3s ease;
}

.saidBar {
  position: absolute;
  top: 0;
  left: 0;
  background: #0c0c0cf6;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  color: aliceblue;
  text-align: center;
  padding-top: 50px;
}

.saidBar-content {
  padding: 20px;
}

.saidBar ul {
  list-style: none;
  padding: 0;
}

.saidBar ul li {
  margin-bottom: 10px;
}

.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
.bar{
  background: white;
  border-radius:2px ;
}
</style>
