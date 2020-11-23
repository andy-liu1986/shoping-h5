import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './api'
import common_m from './util/common_m.js'

// 移动端基础配置 rem等
common_m()
// 使用 vant-ui
Vue.use(Vant);
// Vuey原型对象挂载接口
Vue.prototype.$api = api;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
