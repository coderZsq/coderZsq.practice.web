import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VuePreview from 'vue-preview';

import router from './router';
import app from './App.vue';

import moment from 'moment';
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
import MintUI from 'mint-ui';

import 'mint-ui/lib/style.min.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VuePreview);
Vue.use(MintUI);
// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

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