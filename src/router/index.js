import { createRouter, createWebHashHistory } from 'vue-router'
import LoginFrom from '@/views/LoginFrom.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginFrom
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
