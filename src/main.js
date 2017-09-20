// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

import MintUI from 'mint-ui'

Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.axios = axios 


//公用的组件在这里注册

import vHeader from "./components/public/Header"
import vFooter from "./components/public/Footer"

Vue.component("v-header",vHeader)
Vue.component("v-footer",vFooter)

//引入swiper
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
