// es module导出内容, CommonJS导入内容
const { sum, mul } = require('./js/math');

// CommonJS导出内容, es module导入内容
import { dateFormat, priceFormat } from './js/format';

console.log(sum(20, 30));
console.log(mul(20, 30));

console.log(dateFormat('aaa'));
console.log(priceFormat('bbb'));

console.log(abc);