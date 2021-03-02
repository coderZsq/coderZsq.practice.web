import _ from 'lodash';
import dayjs from 'dayjs';

import './bar_01';
import './bar_02';

console.log('Hello Main');
console.log(_.join(['Hello', 'Main']));
console.log(dayjs(), 'Main');

// 只要是异步导入的代码, webpack都会进行代码分离
// magic comments
import(/* webpackChunkName: "foo" */ './foo').then((res) => {
  console.log(res);
});

import(/* webpackChunkName: "foo_02" */ './foo_02').then((res) => {
  console.log(res);
});
