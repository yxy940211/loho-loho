import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Home from '@/components/Home'
import Near from '@/components/Near'
import Mine from '@/components/Mine'
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
      path: '/Home',
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
    }

  ]
})
