<template>
  <div class="columns is-12 pl-3 pr-3 pt-5">
    <div class="column is-half pb-0 pr-0">
      <router-link to="/">
        <img
          class="pb-0"
          :src="require('../../assets/logo.svg')"
          height="50"
          width="400"
        />
      </router-link>
    </div>
    <nav
      class="navbar is-size-4 column is-half"
      role="navigation"
      aria-label="main navigation"
    >
      <div v-if="mediaWidthStatus">
        <div class="navbar-brand has-text-justified">
          <a
            role="button"
            class="navbar-burger"
            :class="{
              'navbar-burger is-active': hamburgerToggle,
              active: !hamburgerToggle,
            }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click="onToggleBurger"
          >
            <p class="is-size-6">Menu</p>
            <!-- <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span> -->
          </a>
        </div>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{
          'navbar-menu is-active': hamburgerToggle,
          active: !hamburgerToggle,
        }"
      >
        <div class="navbar-start is-align-content-center">
          <router-link @click="onToggleBurgerClose" to="/" class="navbar-item"
            >Home</router-link
          >

          <router-link
            @click="onToggleBurgerClose"
            to="/projects"
            class="navbar-item"
            >Projects</router-link
          >
          <router-link
            @click="onToggleBurgerClose"
            to="/tech-in-use"
            class="navbar-item"
            >Tech in use</router-link
          >
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div>
              <router-link
                @click="onToggleBurgerClose"
                to="/contact"
                class="button is-white is-medium"
              >
                <strong class="has-text-black">Get in Touch</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
// +++ Vue imports ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { ref, onMounted } from "vue";
// +++ 3rd party imports ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ Own imports ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ Other import +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++ Main Logic +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ properties +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ emits ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ refs +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const hamburgerToggle = ref(false);
const mediaWidthStatus = ref(0);
// +++ life cycle +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++ watcher ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
onMounted(() => {
  
});

// +++ event handler ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function onToggleBurger() {
  hamburgerToggle.value = hamburgerToggle.value == true ? false : true;
}

function onToggleBurgerClose() {
  hamburgerToggle.value = false;
}

function onDisplayWidthChanged(i) {
  if (i.matches) {
    mediaWidthStatus.value = 1;
  } else {
    mediaWidthStatus.value = 0;
  }
}
// +++ member +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getScreenSize(w) {
  let MediaQueryList = window.matchMedia(`(max-width: ${w}px)`);
  onDisplayWidthChanged(MediaQueryList);
  MediaQueryList.addListener(onDisplayWidthChanged);
}
// +++ expose +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
</script>
<style scoped lang="scss">
.navbar,
.navbar-menu {
  background-color: #1a1a1a;
  color: white;
}

.navbar-item:link,
.navbar-item:active,
.navbar-item:visited {
  background-color: transparent;
  color: white;
}

.navbar-item:hover {
  background-color: white;
  color: #1a1a1a;
  border-radius: 10px;
}

.navbar-burger {
  background-color: #1a1a1a;
  color: white;
}

.navbar-brand {
  background-color: #1a1a1a;
  color: black;
}
</style>
