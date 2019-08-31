// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import EventBus from './EventBus'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxionsInstance } from './backend/axios'
import './main.css'

Vue.config.productionTip = false

Vue.prototype.$bus = EventBus

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxionsInstance
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  securedAxiosInstance,
  plainAxionsInstance,
  components: { App },
  template: '<App/>'
})
