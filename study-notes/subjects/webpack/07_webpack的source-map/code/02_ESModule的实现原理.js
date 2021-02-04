// 1. 定义了一个对象, 对象里面放的是我们的模块映射
var __webpack_modules__ = {
  "./src/es_index.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      // 调用r的目的是记录一个__esModule -> true
      __webpack_require__.r(__webpack_exports__);

      var _js_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");
      console.log(_js_math__WEBPACK_IMPORTED_MODULE_0__.mul(20, 30));
      console.log(_js_math__WEBPACK_IMPORTED_MODULE_0__.sum(20, 30));
    }),
  "./src/js/math.js":
    (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      // 调用了d函数: 给exports设置了一个代理definition
      // exports对象中本身是没有对应的函数
      __webpack_require__.d(__webpack_exports__, {
        "sum": function () { return sum; },
        "mul": function () { return mul; }
      });
      const sum = (num1, num2) => {
        return num1 + num2;
      }
      const mul = (num1, num2) => {
        return num1 * num2;
      }
    })
};

// 2. 模块的缓存
var __webpack_module_cache__ = {};

// 3. require函数的实现(加载模块)
function __webpack_require__(moduleId) {
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

!function () {
  // __webpack_require__这个函数对象添加了一个属性: d --> 值function
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
}();

!function () {
  // __webpack_require__这个函数对象添加了一个属性: o --> 值function
  __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
}();

!function () {
  // __webpack_require__这个函数对象添加了一个属性: r --> 值function
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
}();

__webpack_require__("./src/es_index.js");
