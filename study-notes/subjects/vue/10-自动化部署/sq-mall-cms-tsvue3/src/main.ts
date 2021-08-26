import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/index.css'
import 'normalize.css'

import router from './router'
import store, { setupStore } from './store'

import registerApp from './global'

const app = createApp(App)
registerApp(app)
setupStore()
app.use(router).use(store).mount('#app')
