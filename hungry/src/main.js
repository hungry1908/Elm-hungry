/*
 * @Author: 熊小兜
 * @Date: 2019-11-11 09:17:36
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-12 10:34:00
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;
Axios.defaults.baseURL = '/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
