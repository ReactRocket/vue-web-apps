import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routers/router'
import { store } from './stores'

createApp(App).use(store).use(router).mount('#app')
