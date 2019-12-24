webpackHotUpdate("static/development/pages/time.js",{

/***/ "./pages/time.js":
/*!***********************!*\
  !*** ./pages/time.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/zhushuangquan/Native Drive/GitHub/coderZsq.practice.web.js/study-notes/engineering/03-React/05-React\u670D\u52A1\u7AEF\u6E32\u67D3/pages/time.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Time() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()),
      nowTime = _useState[0],
      setTime = _useState[1];

  var changeTime = function changeTime() {
    setTime(moment__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()).format());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u663E\u793A\u65F6\u95F4\u4E3A: ", nowTime), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("button", {
    onClick: changeTime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\u6539\u53D8\u65F6\u95F4\u683C\u5F0F")));
}

/* harmony default export */ __webpack_exports__["default"] = (Time);

/***/ })

})
//# sourceMappingURL=time.js.1e2416f1ffdaeea21651.hot-update.js.map