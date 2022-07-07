import Vue from 'vue'
import App from './App.vue'
import axios from './plugins/axios'
import router from './plugins/router'
import store from './plugins/vuex'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
