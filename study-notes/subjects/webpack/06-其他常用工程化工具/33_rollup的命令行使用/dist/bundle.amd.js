// $ npx rollup ./src/main.js -f amd -o dist/bundle.amd.js
define(['exports'], function (exports) {
  'use strict';

  const message = 'Hello Rollup';
  console.log(message);

  const sum = (num1, num2) => {
    return num2;
  };

  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });
});
