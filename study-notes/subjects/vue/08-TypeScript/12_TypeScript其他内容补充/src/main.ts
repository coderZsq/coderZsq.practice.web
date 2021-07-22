import { add, sub } from './utils/math';
import { time, price } from './utils/format';

import dmzImage from './img/dmz.png';

import axios from 'axios';
import lodash from 'lodash';

console.log(add(20, 30));
console.log(sub(20, 30));

console.log(time.format('11111111'));
console.log(price.format(123));

console.log(lodash.join(['abc', 'cba']));

// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res);
// });

// document.getElementById

console.log(sqName);
console.log(sqAge);
console.log(sqHeight);

sqFoo();

const p = new Person('sq', 18);
console.log(p);

$.ajax({});
