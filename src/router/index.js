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
    },
    {
      path: '/admin/edit/:id',
      name: 'adminEdit',
      component: () => import('@/views/AdminUpdateView.vue')
    },
    {
      path: '/my-games',
      name: 'my-games',
      component: () => import('@/views/UserVideogamesView.vue')
    },

  ]
})

export default router
