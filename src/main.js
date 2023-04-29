import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";

axios.defaults.baseURL = "http://3.25.70.38:8888/";
axios.defaults.withCredentials = true;

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
