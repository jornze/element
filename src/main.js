// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'  //webpack.base.conf.js 需要配置plugins插件参数
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http=axios;
axios.defaults.baseURL = 'http://localhost:2000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
