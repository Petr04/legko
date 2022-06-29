<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
    >
      <v-toolbar-title>
        Легко
      </v-toolbar-title>

      <v-spacer></v-spacer>

<!--
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
 -->
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
@import "@/assets/main.css";

.v-main {
  margin-top: 20px;
}

.v-main > * {
  /* margin: 0 15px; */
}
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
