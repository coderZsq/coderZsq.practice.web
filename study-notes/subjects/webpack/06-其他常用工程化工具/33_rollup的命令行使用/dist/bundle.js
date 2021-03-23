// $ npx rollup ./src/main.js -f cjs -o dist/bundle.js
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const message = 'Hello Rollup';
console.log(message);

const sum = (num1, num2) => {
  return num2;
};

exports.sum = sum;
