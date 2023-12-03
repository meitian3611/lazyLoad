import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from '@/api/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$axios = axios

app.mount('#app')
