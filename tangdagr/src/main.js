// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入屏幕适配脚本;  //刘海屏适配
import "./assets/rem.js";
//导入默认样式表  
import "./assets/reset.css";
//引入elementUI  及样式表
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入swiper及样式
import Swiper from "Swiper"
import "swiper/dist/css/swiper.min.css" 
Vue.use(ElementUI)
Vue.prototype.$swiper=Swiper;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
