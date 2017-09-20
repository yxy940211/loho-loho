import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Home from '@/components/Home'
import Near from '@/components/Near'
import Mine from '@/components/Mine'
import Cart from '@/components/Cart/index'
import Reg from '@/components/Register/Register'
//@代表的是src目录

Vue.use(Router)//使用路由插件

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },

        {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    },

            {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },

                {
      path: '/Near',
      name: 'Near',
      component: Mine
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/reg',
      name: 'Register',
      component: Reg
    }

  ]
})
