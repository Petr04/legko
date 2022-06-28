import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import WiFi from '@/views/WiFi.vue'
import Menu from '@/views/Main-Menu.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  { path: '/wi-fi', component: WiFi },
  { path: '/menu', component: Menu}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router