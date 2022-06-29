import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import WiFi from '@/views/WiFi.vue'
import MainMenu from '@/views/MainMenu.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  { path: '', component: MainMenu },
  { path: '/', component: MainMenu },
  { path: '/index.html', component: MainMenu },

  { path: '/wi-fi', component: WiFi },
  { path: '/menu', component: MainMenu },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
