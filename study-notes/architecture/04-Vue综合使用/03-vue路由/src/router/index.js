/**
 * 使用vue-router的步骤
 * 1. 设置使用vue-router
 * 2. 设置路由规则
 * 3. 在对应的入口文件设置我们需要使用router
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Profile from '@/components/Profile'
import Message from '@/components/Message'
import Info from '@/components/Info'

// 1. 使用vue-router
Vue.use(VueRouter)
// 2. 创建对应的规则
let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    // /home/message :message
    // /home/info :info
    path: '/home',
    component: Home,
    children: [
      {
        path: 'message',
        component: Message
      },
      {
        path: 'info',
        component: Info
      }
    ]
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/profile/:id',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

// 3. 导出
export default router
