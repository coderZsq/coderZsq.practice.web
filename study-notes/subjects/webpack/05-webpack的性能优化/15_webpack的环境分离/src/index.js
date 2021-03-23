import axios from 'axios';

import React from 'react';
import ReactDom from 'react-dom';
import ReactApp from './App.jsx';

import Vue from 'vue';
import VueApp from './App.vue';

import './math';

console.log('Hello coderZsq');
console.log('abc');

if (module.hot) {
  module.hot.accept('./math.js', () => {
    console.log('math模块发生了更新~');
  });
}

// React的代码
ReactDom.render(<ReactApp />, document.getElementById('app'));

// Vue的代码
new Vue({
  render: (h) => h(VueApp),
}).$mount('#root');

// axios网络请求
axios
  .get('/api/moment')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// development/production
console.log(process.env.NODE_ENV);

let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = '';
} else {
  baseURL = '';
}
