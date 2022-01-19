import {createApp} from 'vue'
import VueClickAway from 'vue3-click-away'
import store from "./store";
import mdiVue from 'mdi-vue/v3'
import * as mdi from "@mdi/js"

import App from './App.vue'
import "./index.css"
import router from "./router";

createApp(App)
    .use(router)
    .use(store)
    .use(VueClickAway)
    .use(mdiVue, {icons: mdi})
    .mount('#app')
