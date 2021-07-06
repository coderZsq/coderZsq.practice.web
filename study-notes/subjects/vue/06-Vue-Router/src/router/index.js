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
    path: '/login',
    component: () => import('../pages/Login.vue'),
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

// 动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category.vue'),
};

// 添加顶级路由对象
router.addRoute(categoryRoute);

// 添加二级路由对象
router.addRoute('home', {
  path: 'moment',
  component: () => import('../pages/HomeMoment.vue'),
});

// 导航守卫 beforeEach
let counter = 0;
// to: Route对象, 即将跳转到的Route对象
// from: Route对象, 从哪一个路由对象导航过来的
/**
 * 返回值问题:
 *  1. false: 不进行导航
 *  2. undefined或者不写返回值: 进行默认导航
 *  3. 字符串: 路径, 跳转到对应的路径中
 *  4. 对象: 类似于 router.push({path: "/login", query: ....})
 */
router.beforeEach((to, from) => {
  console.log(`进行了${++counter}次路由跳转`);

  // if (to.path.indexOf('/home') !== -1) {
  //   return '/login';
  // }

  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token');
    if (!token) {
      return '/login';
    }
  }
});

export default router;
