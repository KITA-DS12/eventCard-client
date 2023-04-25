import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/EventManagement.vue'
import MyEvent from '../views/EventManagement.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/myevent', name: 'MyEvent', component: MyEvent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
