import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueCookie from 'vue-cookie'
import showToast from '@/util/util'
import store from './store'


Vue.use(showToast)
Vue.use(VueCookie)
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
