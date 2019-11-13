/*
 * @Author: 熊小兜
 * @Date: 2019-11-11 09:17:36
 * @LastEditors: 熊小兜
 * @LastEditTime: 2019-11-11 17:18:15
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index';
import LoginPage from '@/pages/LoginPage';
import Registerpage from '@/pages/Registerpage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/Registerpage',
      name: 'Registerpage',
      component: Registerpage
    }
  ]
})
