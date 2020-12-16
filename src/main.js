import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 公共样式
import '@/commonStyle/init.less';
import '@/commonStyle/resetElementStyle.less';

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

// 使用 Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 封装 axios 拦截器
import '@/network/request.js';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
