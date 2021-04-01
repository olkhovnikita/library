import Vue from 'vue'
import VueRouter from 'vue-router'
import Hall from '../components/Hall.vue'
import Library from '../components/Library.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hall },
  { path: '/library', component: Library },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
