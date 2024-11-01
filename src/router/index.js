import { createRouter, createWebHashHistory } from 'vue-router'
import LoginFrom from '@/views/LoginFrom.vue'
import Layout from '@/views/Layout.vue'

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: LoginFrom
  },
  {
    path:'/',
    name:'Layout',
    component:Layout
  }
  
]

router.push('/Layout')

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
