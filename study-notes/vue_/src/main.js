import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './router';
import app from './App.vue';
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import moment from 'moment';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern);
});

new Vue({
    el: '#app',
    render: c => c(app),
    router
});