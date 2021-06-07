import { createApp } from 'vue/dist/vue.esm-bundler';
import { sum } from './js/math';
const { priceFormat } = require('./js/format');

import App from './vue/App.vue';

import './js/element';

console.log(sum(20, 30));
console.log(priceFormat());

// Vue代码
// const app = createApp({
//   template: '#my-app',
//   components: {},
//   data() {
//     return {
//       title: 'Hello World',
//       message: '哈哈哈',
//     };
//   },
// });
const app = createApp(App);
app.mount('#app');
