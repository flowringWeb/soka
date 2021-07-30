import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Step1',
    name: 'Step1',
    component: () => import('../views/Step1.vue')
  },
  {
    path: '/Step2',
    name: 'Step2',
    component: () => import('../views/Step2.vue')
  },
  {
    path: '/Step3',
    name: 'Step3',
    component: () => import('../views/Step3.vue')
  },
  //PDF 下載頁面
  {
    path: '/Download',
    name: 'Download',
    component: () => import('../views/Download.vue'),
    hidden: true
  },
  {
    path: '/Step4',
    name: 'Step4',
    component: () => import('../views/Step4.vue')
  },
  {
    path: '/Step5',
    name: 'Step5',
    component: () => import('../views/Step5.vue')
  },
  {
    path: '/Step6',
    name: 'Step6',
    component: () => import('../views/Step6.vue')
  },
  {
    path: '/Step7',
    name: 'Step7',
    component: () => import('../views/Step7.vue')
  },
  {
    path: '/Step8',
    name: 'Step8',
    component: () => import('../views/Step8.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
