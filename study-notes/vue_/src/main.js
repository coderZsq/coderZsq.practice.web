import Vue from 'vue';
import app from './App.vue';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.component(Header.name, Header);


new Vue({
    el: '#app',
    render: c => c(app)
});