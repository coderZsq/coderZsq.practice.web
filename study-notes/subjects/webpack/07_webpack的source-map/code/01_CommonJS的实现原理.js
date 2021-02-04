// 定义了一个对象
// 模块的路径(key): 函数(value)
var __webpack_modules__ = {
  "./src/js/format.js":
    (function (module) {
      const dateFormat = (date) => {
        return "2020-12-12";
      }
      const priceFormat = (price) => {
        return "100.00";
      }

      // 将我们要导出的变量, 放入到module对象中的exports对象
      module.exports = {
        dateFormat,
        priceFormat
      }
    })
};

// 定义一个对象, 作为加载模块的缓存
var __webpack_module_cache__ = {};

// 是一个函数, 当我们加载一个模块时, 都会通过这个函数来加载
function __webpack_require__(moduleId) {
  // 1. 判断缓存中是否已经加载过
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }

  // 2. 给module变量和__webpack_module_cache__[moduleId]赋值了同一个对象
  var module = __webpack_module_cache__[moduleId] = { exports: {} };

  // 3. 加载执行模块
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // 4. 导出module.exports
  return module.exports;
}

// 具体开始执行代码逻辑
!function () {
  // 1. 加载./src/js/format.js
  const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js");
  console.log(dateFormat('abc'));
  console.log(priceFormat('abc'));
}();
