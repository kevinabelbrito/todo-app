import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import axios from './axios'
import vueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

library.add(fas)

createApp(App)
    .use(router)
    .use(vueAxios, axios)
    .use(store)
    .component('fa', FontAwesomeIcon)
    .mount('#app')