<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-title>
        <h3 class="text-h4">Легко</h3>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
@import "@/assets/main.css";
</style>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
