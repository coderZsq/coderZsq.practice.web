/******/ (() => {
	// webpackBootstrap
	/******/ "use strict";
	/******/ var __webpack_modules__ = {
		/***/ "./src/utils/math.js":
			/*!***************************!*\
  !*** ./src/utils/math.js ***!
  \***************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r(__webpack_exports__);
				/* harmony export */ __webpack_require__.d(__webpack_exports__, {
					/* harmony export */ sum: () => /* binding */ sum
					/* harmony export */
				});
				function sum(num1, num2) {
					return num1 + num2;
				}

				/***/
			}

		/******/
	}; // The module cache
	/************************************************************************/
	/******/ /******/ var __webpack_module_cache__ = {}; // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ if (__webpack_module_cache__[moduleId]) {
			/******/ return __webpack_module_cache__[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {}
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__
		); // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} /* webpack/runtime/define property getters */
	/******/
	/************************************************************************/
	/******/ /******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})(); /* webpack/runtime/hasOwnProperty shorthand */
	/******/
	/******/ /******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})(); /* webpack/runtime/make namespace object */
	/******/
	/******/ /******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = exports => {
			/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module"
				});
				/******/
			}
			/******/ Object.defineProperty(exports, "__esModule", { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	(() => {
		/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
		__webpack_require__.r(__webpack_exports__);
		/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
			/*! ./utils/math */ "./src/utils/math.js"
		);

		console.log((0, _utils_math__WEBPACK_IMPORTED_MODULE_0__.sum)(20, 30));
		console.log("Hello Webpack");
	})();

	/******/
})();
//# sourceMappingURL=bundle.js.map
