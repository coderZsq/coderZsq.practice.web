import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VuePreview from 'vue-preview';
import Vuex from 'vuex';

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
Vue.use(Vuex);
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

let car = JSON.parse(localStorage.getItem('car') || '[]');

let store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addToCar(state, goodsinfo) {
            let flag = false;
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                state.car.push(goodsinfo);
            }
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            });
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeFromCar(state, id) {
            state.car.some((item, i) => {
                if (item.id === id) {
                    state.car.space(i, 1);
                    return true;
                }
            });
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        getAllCount(state) {
            let c = 0;
            state.car.forEach(item => {
                c += item.count;
            });
            return c;
        },
        getGoodsCount(state) {
            let o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            });
            return o;
        },
        getGoodsSelected(state) {
            let o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            });
            return o;
        }
    }
});

new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
});