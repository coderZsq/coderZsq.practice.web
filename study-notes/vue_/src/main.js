import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import app from './App.vue';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';


Vue.use(VueRouter);
Vue.component(Header.name, Header);


new Vue({
    el: '#app',
    render: c => c(app),
    router
});