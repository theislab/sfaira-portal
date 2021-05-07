import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Datasets from '../views/Datasets.vue'

const routes = [
  {
    path: import.meta.env.BASE_URL,
    name: 'Home',
    component: Home
  },
  {
    path: import.meta.env.BASE_URL + 'datasets',
    name: 'Datasets',
    component: Datasets
  },
  {
    path: import.meta.env.BASE_URL + 'about',
    name: 'About',
    component: About
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: Home
  }
]

const router = createRouter({
  base: import.meta.env.BASE_URL,
  history: createWebHistory(),
  routes
})

export default router
