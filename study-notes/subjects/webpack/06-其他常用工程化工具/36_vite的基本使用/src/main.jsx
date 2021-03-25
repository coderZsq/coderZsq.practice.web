import { sum } from './util/math.js';
import _ from 'lodash-es';

// 对css处理
import './css/base.css';
import './css/style.less';

// 对ts的处理
import { dateFormat } from './ts/format';

// 对img的处理
import zznhImg from './img/zznh.png';

// 对vue的处理
import Vue from 'vue';
import VueApp from './vue/App.vue';

// 对React的处理
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './react/App';

console.log('Hello Vite');
console.log(sum(20, 30));
console.log(_.join(['abc', 'cba']));

console.log(dateFormat('abc'));

// img元素
const imgEl = document.createElement('img');
imgEl.src = zznhImg;
document.body.appendChild(imgEl);

// vue的实例
new Vue({
  render: (h) => h(VueApp),
}).$mount('#app');

// ReactDOM的render
// <ReactApp /> => jsx
ReactDOM.render(<ReactApp />, document.getElementById('root'));
