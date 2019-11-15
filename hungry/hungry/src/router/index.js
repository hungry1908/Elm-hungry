/*
 * @Author: your name
 * @Date: 2019-11-06 17:22:32
 * @LastEditTime: 2019-11-15 08:47:47
 * @LastEditors: 熊小兜
 * @Description: In User Settings Edit
 * @FilePath: \zhiwuyishengf:\app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import shopping from '@/pages/shopping';
import horist from '@/pages/horist';
import food from '@/pages/food';

import MinePage from '@/pages/MinePage' 
import CountPage from '@/pages/CountPage'
import SettingPage from '@/pages/SettingPage'
import Rate from '@/pages/Rate'

import Index from '@/pages/Index';
import LoginPage from '@/pages/LoginPage';
import Registerpage from '@/pages/Registerpage';
import page from '@/pages/page';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/horist',
      name: 'horist',
      component: horist
    },
    {
      path: '/food/:shopsid',
      name: 'food',
      component: food,
      props:true
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage//页面内容
    },  
    {
      path: '/CountPage',
      name: 'CountPage',
      component: CountPage
    },
    {
      path: '/SettingPage',
      name: 'SettingPage',
      component: SettingPage
    },
    {
      path: '/Rate',
      name: 'Rate',
      component: Rate
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
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    }
  ]
})
