/*
 * @Author: chenhua
 * @Date: 2020-07-12 15:00:12
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-12 15:13:26
 * @Description: 
 * @FilePath: \example\tabbar\src\main.js
 */ 
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

