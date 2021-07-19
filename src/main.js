import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueCookie from 'vue-cookie'
import showToast from '@/util/util'
import { Message } from 'element-ui'
import store from './store'
import modal from "@/components/modal";

Vue.use(showToast)
Vue.use(VueCookie)
Vue.config.productionTip = false

Vue.prototype.$message = Message;

Vue.component("modal", modal)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
