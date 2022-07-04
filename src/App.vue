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
    <v-main :class="{ menu: menuOpened }">
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
@import "@/assets/main.css";

body {
  font-size: 22px;
}

.v-main {
  max-width: 450px !important;
  margin: 20px auto;
}

.v-main.menu {
  margin-bottom: 0;
}

.v-main:not(.menu) > * {
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
      menuOpened: ['', '/', '/index.html'].includes(this.$route.path),
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
