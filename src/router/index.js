import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/Question.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import('../views/Credit.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/Card.vue')
  }



]

const router = new VueRouter({
  routes
})

export default router
