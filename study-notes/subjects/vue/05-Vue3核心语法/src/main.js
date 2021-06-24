import { createApp } from 'vue';
import App from './14_自定义指令/App.vue';
import 'animate.css';

const app = createApp(App);

// app.directive('focus', {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus();
//   },
// }),
// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log('全局的created生命周期');
//   },
// });

app.mount('#app');
