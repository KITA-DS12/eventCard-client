import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/EventManagement.vue'
import MyEvent from '../views/EventManagement.vue'
import MyFriend from '../views/MyFriend.vue'
import MyProfile from '../views/MyProfile.vue'
import Login from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Top from '../views/TopPage.vue'

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/myevent', name: 'MyEvent', component: MyEvent },
  { path: '/myfriend', name: 'MyFriend', component: MyFriend },
  { path: '/myprofile', name: 'MyProfile', component: MyProfile },
  { path: '/login', name: 'LogIn', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
