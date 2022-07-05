<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
    >
      <v-app-bar-title>
        <img src="@/assets/logo-text-letter-overlay.svg" width="60">
      </v-app-bar-title>

      <v-spacer></v-spacer>

<!--
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
 -->
    </v-app-bar>
    <div class="gradient" :class="{ menu: menuOpened }">
      <v-main :class="{ menu: menuOpened }">
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<style>
@import "@/assets/main.css";

body {
  font-size: 22px;
}

.gradient.menu {
  background: radial-gradient(
    circle at 50% 120%,
    rgba(255,255,255,1) -30%,
    rgba(0,0,255,0.3) 70%,
    rgba(255,255,255,0) 0%
  );
  background-attachment: fixed;
  height: 100%;
}

@media screen and (min-width: 650px) { 
  .gradient.menu {
    background: radial-gradient(
      circle at 50% 160%,
      rgba(255,255,255,1) 10%,
      rgba(0,0,255,0.3) 75%,
      rgba(255,255,255,0) 0%
    );
  }
}

.v-main {
  max-width: 450px !important;
  margin: 20px auto;
}

.v-main > * {
  margin: 0 15px;
}

.v-app-bar-title > * {
  display: flex;
  align-items: center;
}
</style>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      menuOpened: true,
    };
  },
  watch: {
    $route(r) {
      this.menuOpened = ['', '/', '/index.html'].includes(r.path);
    },
  },
};
</script>
