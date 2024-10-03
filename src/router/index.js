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
    {
      path: '/videogames',
      name: 'videogames',
      component: () => import('@/views/VideogamesListView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminCreateView.vue')
    }
  ]
})

export default router
