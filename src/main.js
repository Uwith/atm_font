import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import particles from 'particles.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/public.css';
import axios from 'axios';
import API from '@/utils/APIUtil';
import fetch from '@/utils/fetch'
import Storage from '@/utils/StorageUtil'
// import Register from '@/utils/Register'

//阻止启动生产消息
Vue.config.productionTip = false
// 全局挂在组件
const extend = Vue.prototype

//定义全局变量
Vue.prototype.Storage = Storage;
Vue.prototype.API = API;

extend.$post = fetch.post
extend.$get = fetch.get
extend.$form = fetch.form


Vue.use(ElementUI)
//路由拦截
// router.beforeEach(function (to, from, next) {
//   var user = Storage.Session.get('User');
//   if (!user) {
//     if (to.path.indexOf('/views') != -1) {
//       router.push({
//         path: '/login',
//         name: 'Login',
//         params: {
//           msg: '您还未登录，请登录！'
//         }
//       })
//     }
//   }
//   next(true)
// })

new Vue({
  router,
  particles,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
