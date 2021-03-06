import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'
import less from "less";

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(less)
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
