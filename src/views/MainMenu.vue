<template>
  <div class="menu">
    <h1 class="header">
      Нажмите на иконку,<br>чтобы изучить нужное приложение
    </h1>

    <!-- TODO: Разобраться с градиентом на широких экранах -->
    <!-- TODO: Подправить градиент, чтобы он был как в фигме -->

    <div class="apps-container">
      <div class="apps">
        <!-- push() instead of <router-link> for sake of params -->
        <div
          v-for="group in groups"
          :key="group.id"
          @click="$router.push({
            name: 'group',
            params: group,
          })"
          class="app"
        >
          <img :src="'data:image/png;base64, ' + group.icon">
          <p>{{ group.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: 1.5em;
  font-weight: 500;
}

.v-main {
  margin-bottom: 0;
}

.menu {
  justify-content: center;
  height: 100%;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  font-size: 1em;
}

.apps-container {
  margin-top: 40px;
  padding: 40px 15px 0 15px;
}

.apps {
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  justify-content: center;
  margin-top: 40px;
  column-gap: 30px;
}

.app {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  font-size: .9em;
}

.app img {
  width: 70px;
}

a {
  color: #000 !important;
  text-decoration: none
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['groups']),
  },
};
</script>
