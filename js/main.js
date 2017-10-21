/*
* @Author: Administrator
* @Date:   2017-08-20 14:07:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-20 18:03:52
*/

'use strict';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
