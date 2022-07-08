<template>
  <div
    v-if="!pingSuccessful && pingSuccessful != null"
    class="wifi-warning"
  >
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
}

.button {
  margin-top: 15px;
  padding: .3em .4em;
}
</style>

<script>
import { ping } from '@/lib/network.js';

export default {
  data: () => ({
    pingSuccessful: null,
  }),
  methods: {
    updatePingStatus() {
      ping().then(val => this.pingSuccessful = val);
    },
  },
  mounted() {
    this.updatePingStatus();
    setInterval(this.updatePingStatus, 1000);
  },
};
</script>
