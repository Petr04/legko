import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import MainMenu from '@/views/MainMenu.vue'
import Group from '@/views/Group.vue'
import Article from '@/views/Article.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  { path: '', component: MainMenu },
  { path: '/', component: MainMenu },
  { path: '/index.html', component: MainMenu },

  { path: '/group/:id', name: 'group', component: Group },
  { path: '/article/:id', name: 'article', component: Article },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
