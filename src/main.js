import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './index.css'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUserSecret,
  faXmark,
  faUser,
  faArrowLeft,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import 'vue3-toastify/dist/index.css'

library.add(faUserSecret, faXmark, faUser, faArrowLeft, faPaperPlane)

const app = createApp(App)

app.use(router)
app.use(store).component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
