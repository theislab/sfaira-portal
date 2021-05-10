import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixpanel from './mixpanel'
import './index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(mixpanel, {
    token: 'c05f0c3d26b1a0322afc6ccbf7209e9f',
    config: { api_host: 'https://api-eu.mixpanel.com' }
  })
  .mount('#app')
