// $ npx rollup ./src/main.js -f iife -o dist/bundle.browser.js
(function (exports) {
  'use strict';

  const message = 'Hello Rollup';
  console.log(message);

  const sum = (num1, num2) => {
    return num2;
  };

  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
})({});
