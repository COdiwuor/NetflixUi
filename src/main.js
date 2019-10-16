import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import MovieMixin from "./mixins/movieVuex"

Vue.mixin(MovieMixin);

// axios.interceptors.request.use(function (config) {
//   config.headers = {
//     'Content-Type' : 'application/json',
//   }
//   return config
// }, function(error){

// })

new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
