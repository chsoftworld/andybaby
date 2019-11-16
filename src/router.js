import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/views/UserInfo.vue'
import Home from '@/views/Home.vue'
import Echarts from '@/views/Echarts.vue'
import Vonic from '@/views/Vonic.vue'
import Drawer from "./views/Drawer";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/queryUser',
      component: UserInfo
    },
    {
      path: '/userHotMap',
      component: Echarts
    },
    {
      path: '/vonic',
      component: Vonic
    },
    {
      path: '/drawer',
      component: Drawer
    }
    ]
  }]
})
