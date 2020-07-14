/*
 * @Author: chenhua
 * @Date: 2020-07-12 15:00:12
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-13 08:29:39
 * @Description: 
 * @FilePath: \example\tabbar\src\router\index.js
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

const Home = () =>import('../views/home/Home')
const Category = () =>import('../views/category/Category')
const Cart = () =>import('../views/cart/Cart')
const Profile = () =>import('../views/profile/Profile')

// 1 安装插件
Vue.use(Router)

// 2-3 创建路由对象并导出
// export default new Router({
//   routes: [
    // {
    //   path: '/',
    //   name: '',
    //   component: 
    // }
//   ]
// })


// 2 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  { 
    path: '/home', 
    component: Home
  },
  { 
    path: '/category', 
    component: Category
  },
  { 
    path: '/cart', 
    component: Cart
  },
  { 
    path: '/profile', 
    component: Profile
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})

// 3 导出router
export default router