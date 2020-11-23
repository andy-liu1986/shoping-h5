import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children:[
      {
        path: '/layout/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
      },
      {
        path: '/layout/knapsack',
        name: 'knapsack',
        component: () => import(/* webpackChunkName: "about" */ '../views/knapsack/index.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
