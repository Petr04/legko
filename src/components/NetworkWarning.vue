<template>
  <div class="wifi-warning">
    <span>Чтобы воспользоваться этим приложением, необходимо
    подключиться к интернету</span>
    <div class="button">
      <router-link to="/wi-fi">
        Узнать, как
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.wifi-warning {
  background: #7a85e5; /* #7340ee */
  border-radius: 30px;
  padding: 25px;
  margin: 0 15px;
  margin-top: 10px;
  margin-bottom: 25px;
}

.button {
  margin-top: 15px;
  padding: .3em .4em;
}
</style>
