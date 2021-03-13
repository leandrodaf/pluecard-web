import Vue from 'vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as rules from 'vee-validate/dist/rules';

import App from './App.vue'

import "./app.scss";
import router from './router'
import store from './store'

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
