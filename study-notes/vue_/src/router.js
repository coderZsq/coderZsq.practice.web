import VueRouter from 'vue-router';
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';


let router = new VueRouter({
  routes: [
    {path: '/home', components: HomeContainer},
    {path: '/member', components: MemberContainer},
    {path: '/shopcar', components: ShopcarContainer},
    {path: '/search', components: SearchContainer}
  ],
  linkActiveClass: 'mui-active'
});


export default router