import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
    { path: '/services/:type', name: 'service-detail', component: () => import('../views/ServiceDetailView.vue'), props: true },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') }
  ]
})

export default router