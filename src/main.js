import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import "./app.scss";
import './vee-validate'
import i18n from './i18n-setup'

import router from './router'
import store from './store'
import './registerServiceWorker'

import GoogleAPIs from 'vue-googleapis'

Vue.use(GoogleAPIs, {
  clientId: '984446285851-p18j7hilgsc1qhpv18me6e26s06plbhp.apps.googleusercontent.com',
  scope: 'profile email openid'
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
