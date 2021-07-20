import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import particles from 'particles.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/public.css';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(particles)

Vue.use(ElementUI);

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')
