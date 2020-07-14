<!--
 * @Author: chenhua
 * @Date: 2020-07-12 15:00:12
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-13 13:48:46
 * @Description: 
 * @FilePath: \example\tabbar\src\App.vue
--> 
<template>
  <div id="app">
    
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from '../src/components/MainTabBar'
export default {
  name: 'App',
  components: {
    // TabBar,
    // TabBarItem
    MainTabBar
  }
}
</script>

<style>
 @import "./assets/css/base.css";
 
</style>
