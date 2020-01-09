import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

// 设置对应的导入
import AgeList from '@/components/AgeList'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'userlist',
          component: UserList
        },
        {
          path: 'agelist',
          component: AgeList
        }
      ]
    }
  ]
})
