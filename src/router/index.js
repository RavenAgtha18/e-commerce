import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/information',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/blog',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/shoppingList',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/brand',
      name: 'brand',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Brand.vue')
    }
  ]
})

export default router
