import './assets/main.css'

import { createApp } from 'vue'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from "@okta/okta-vue";
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {defaultConfig, plugin} from "@formkit/vue";
import { createProPlugin, inputs } from '@formkit/pro'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
import sampleconfig from '@/config'
const pro = createProPlugin('fk-795b8cad2ee', inputs)

const app = createApp(App)
const oktaAuth = new OktaAuth(sampleconfig.oidc)

app.use(router)
app.use(plugin, defaultConfig({plugins: [pro]}))
app.use(OktaVue, {
    oktaAuth,
    onAuthRequired: () => {
        router.push('/login')
    },
    onAuthResume: () => {
        router.push('/login')
    }
})
app.mount('#app')
