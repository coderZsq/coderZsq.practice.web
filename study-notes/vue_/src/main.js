import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './router';
import app from './App.vue';
import { Header, Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


new Vue({
    el: '#app',
    render: c => c(app),
    router
});