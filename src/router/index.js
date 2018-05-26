import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/table/table'
import Form from '@/components/form/form'
import User from '@/components/user/user'
import Pageone from '@/components/pageone/pageone'
import Pagetwo from '@/components/pagetwo/pagetwo'
import Pagethr from '@/components/pagethr/pagethr'

Vue.use(Router)

export default new Router({
	mode:'history', //去掉路由地址的#
  routes: [
    {
      path: '/',
      redirect: './table'
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/pageone',
      name: 'pageone',
      component: Pageone
    },
    {
      path: '/pagetwo',
      name: 'pagetwo',
      component: Pagetwo
    },
    {
      path: '/pagethr',
      name: 'pagethr',
      component: Pagethr
    },
    {
    	path:'*',
    	redirect:"/table"
    }
  ]
})
