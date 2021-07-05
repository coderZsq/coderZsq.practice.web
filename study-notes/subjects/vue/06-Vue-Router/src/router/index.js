import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

// import Home from '../pages/Home.vue';
// import About from '../pages/About.vue';

// 配置映射关系
const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
    meta: {
      name: 'sq',
      age: 18,
      height: 1.88,
    },
    children: [
      {
        path: '',
        redirect: '/home/message',
      },
      {
        path: 'message',
        component: import('../pages/HomeMessage.vue'),
      },
      {
        path: 'shops',
        component: import('../pages/HomeShops.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/user/:username/id/:id',
    component: () => import('../pages/User.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/NotFound.vue'),
  },
];

// 创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
