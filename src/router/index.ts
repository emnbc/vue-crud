import { securityGuard } from '@/utils/auth'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import Users from '../views/inner-views/users/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    meta: { authRequired: true },
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { authRequired: true },
        component: () => import(/* webpackChunkName: "home" */ '../views/inner-views/home/index.vue')
      },
      {
        path: '/users',
        component: Users,
        meta: { authRequired: true },
      },
      {
        path: '/about',
        name: 'About',
        meta: { authRequired: true },
        component: () => import(/* webpackChunkName: "about" */ '../views/inner-views/about/index.vue')
      },
    ]
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
