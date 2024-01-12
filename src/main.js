import './assets/main.css'

import { createApp } from 'vue'
import { createAuth0 } from "@auth0/auth0-vue";
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {defaultConfig, plugin} from "@formkit/vue";
import { createProPlugin, inputs } from '@formkit/pro'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

const pro = createProPlugin('fk-795b8cad2ee', inputs)
const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig({plugins: [pro]}))
app.use(
    createAuth0({
        domain: 'dev-epbohyrlxewyz745.eu.auth0.com',
        clientId: 'KGL5LzfMMojMeuOA1DhKcHgeMdPMZV6p',
        authorizationParams: {
            redirect_uri: 'https://gaestebuch-frontend.onrender.com'
        }
    })
)
app.mount('#app')
