
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import {useUserStore} from "@/stores/user";
import { i18n } from './locales'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
    .use(pinia)
    .use(i18n)
app.mount('#app')

const userStore = useUserStore()
