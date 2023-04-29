import { createRouter, createWebHistory } from "vue-router";
// import Home from '../views/EventManagement.vue'
import MyEvent from "../views/EventManagement.vue";
import MyFriend from "../views/MyFriend.vue";
import MyProfile from "../views/MyProfile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Top from "../views/TopPage.vue";
import Friend from "../views/Friend.vue";
// import JoinedEvent from '../views/JoinedEvent.vue'

const routes = [
  { path: "/", name: "Top", component: Top },
  { path: "/myevent", name: "MyEvent", component: MyEvent },
  { path: "/myfriend", name: "MyFriend", component: MyFriend },
  { path: "/myprofile", name: "MyProfile", component: MyProfile },
  { path: "/signin", name: "SignIn", component: SignIn },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/friend/:uid", name: "Friend", component: Friend },
  // { path: '/joinedevent', name: 'JoinedEvent', component: JoinedEvent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
