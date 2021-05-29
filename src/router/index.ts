import { securityGuard } from '@/utils/auth'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: { authRequired: true },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: { authRequired: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign-in',
    name: 'Sign-In',
    meta: { authRequired: false },
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/SignIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(securityGuard);

export default router
