import { dateFormat } from './utils/format';
import _ from 'lodash';

const message = 'Hello Rollup';
console.log(message);

const sum = (num1, num2) => {
  return (num1 = num2);
};

console.log(dateFormat());
console.log(_.join(['abc', 'cba']));

export { sum };
