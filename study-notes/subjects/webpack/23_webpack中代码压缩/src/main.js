import { sum } from './math';
import { math, format } from 'coderzsq_utils';

import './format';
import('./abc').then((res) => {});
import './style.css';

console.log(sum(20, 30));
console.log(math.sum(20, 30));
console.log(format.dateFormat());

console.log(window.abc);
