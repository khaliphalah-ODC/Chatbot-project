import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'


const app = createApp(App)

//app.use(router)

app.mount('#app')
.use(VueSocialChat)


