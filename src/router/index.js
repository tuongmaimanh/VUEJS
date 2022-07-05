import { createRouter, createWebHistory } from 'vue-router'
import HomeC from '../components/HomeC.vue'
import LoginC from '../components/LoginC.vue'
import RegisterC from '../components/RegisterC.vue'
import AdminC from '../components/AdminC.vue'
import AddProductC from '../components/AddProductC.vue'
import EditViewC from '../components/EditViewC.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginC
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterC
  },
  {
    path: '/home',
    name: 'home',
    component: HomeC
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../components/DetailC.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminC
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: AddProductC
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditViewC
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
