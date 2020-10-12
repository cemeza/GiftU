module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Styles/GlobalStyle.js":
/*!*******************************!*\
  !*** ./Styles/GlobalStyle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  #__next {\n      min-height: 100vh;\n      display: grid;\n      grid-template-rows: auto 1fr auto;\n    }\n    #__next > main {\n      margin: 1rem auto 0;\n      max-width: 80ch;\n    }\n    .body-main {\n      font-family: 'Balsamiq Sans', cursive;\n      font-size: 18px;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TdHlsZXMvR2xvYmFsU3R5bGUuanM/NjA3NSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCOzs7Ozs7Ozs7Ozs7OztDQUF0QztBQWdCZUQsMEVBQWYiLCJmaWxlIjoiLi9TdHlsZXMvR2xvYmFsU3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAjX19uZXh0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICB9XG4gICAgI19fbmV4dCA+IG1haW4ge1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcbiAgICAgIG1heC13aWR0aDogODBjaDtcbiAgICB9XG4gICAgLmJvZHktbWFpbiB7XG4gICAgICBmb250LWZhbWlseTogJ0JhbHNhbWlxIFNhbnMnLCBjdXJzaXZlO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Styles/GlobalStyle.js\n");

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/components/footer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: \"Quicksand\";\n`;\nconst WrapperLogin = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\tmargin-top: 60px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n`;\nconst Cuenta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`\n\tfont-size: 15px;\n`;\nconst LinkLogin = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`\n\tcolor: blue;\n\tfont-size: 16px;\n`;\nconst ImageFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n\theight: auto;\n\twidth: 100vw;\n`;\nconst image = \"images/footer.png\";\n\nconst Footer = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 3\n    }\n  }, __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }\n  }, __jsx(WrapperLogin, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(Cuenta, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 6\n    }\n  }, \"\\xBFYa tienes cuenta?\"), __jsx(LinkLogin, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 6\n    }\n  }, \"Log in\")), __jsx(ImageFooter, {\n    src: image,\n    alt: \"footer`s image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcz82ODgzIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiV3JhcHBlckxvZ2luIiwiZGl2IiwiQ3VlbnRhIiwicCIsIkxpbmtMb2dpbiIsImEiLCJJbWFnZUZvb3RlciIsImltZyIsImltYWdlIiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQU0sQ0FBQ0MsT0FBUTs7Ozs7OztDQUEvQjtBQVNBLE1BQU1DLFlBQVksR0FBR0Ysd0RBQU0sQ0FBQ0csR0FBSTs7Ozs7OztDQUFoQztBQVNBLE1BQU1DLE1BQU0sR0FBR0osd0RBQU0sQ0FBQ0ssQ0FBRTs7Q0FBeEI7QUFJQSxNQUFNQyxTQUFTLEdBQUdOLHdEQUFNLENBQUNPLENBQUU7OztDQUEzQjtBQUtBLE1BQU1DLFdBQVcsR0FBR1Isd0RBQU0sQ0FBQ1MsR0FBSTs7O0NBQS9CO0FBS0EsTUFBTUMsS0FBSyxHQUFHLG1CQUFkOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ3BCLFNBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURELEVBRUMsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxDQURELEVBS0MsTUFBQyxXQUFEO0FBQWEsT0FBRyxFQUFFRCxLQUFsQjtBQUF5QixPQUFHLEVBQUMsZ0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELENBREQ7QUFXQSxDQVpEOztBQWNlQyxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuYDtcblxuY29uc3QgV3JhcHBlckxvZ2luID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLXRvcDogNjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEN1ZW50YSA9IHN0eWxlZC5wYFxuXHRmb250LXNpemU6IDE1cHg7XG5gO1xuXG5jb25zdCBMaW5rTG9naW4gPSBzdHlsZWQuYWBcblx0Y29sb3I6IGJsdWU7XG5cdGZvbnQtc2l6ZTogMTZweDtcbmA7XG5cbmNvbnN0IEltYWdlRm9vdGVyID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiBhdXRvO1xuXHR3aWR0aDogMTAwdnc7XG5gO1xuXG5jb25zdCBpbWFnZSA9IFwiaW1hZ2VzL2Zvb3Rlci5wbmdcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxXcmFwcGVyPlxuXHRcdFx0XHQ8V3JhcHBlckxvZ2luPlxuXHRcdFx0XHRcdDxDdWVudGE+wr9ZYSB0aWVuZXMgY3VlbnRhPzwvQ3VlbnRhPlxuXHRcdFx0XHRcdDxMaW5rTG9naW4+TG9nIGluPC9MaW5rTG9naW4+XG5cdFx0XHRcdDwvV3JhcHBlckxvZ2luPlxuXHRcdFx0XHQ8SW1hZ2VGb290ZXIgc3JjPXtpbWFnZX0gYWx0PVwiZm9vdGVyYHMgaW1hZ2VcIiAvPlxuXHRcdFx0PC9XcmFwcGVyPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/components/header.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`\n\tdisplay: flex;\n\tjustify-content: space-between;\n`;\nconst WrapperMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\tdisplay: flex;\n\talign-items: center;\n`;\nconst Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`\n\tfont-size: 30px;\n\tfont-family: \"Quicksand\";\n\tcolor: #87d3b8;\n`;\nconst LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n\tpadding: 10px 25px;\n\theight: 60px;\n\twidth: auto;\n`;\nconst LogoName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n\tpadding: 10px;\n\theight: 37px;\n\twidth: auto;\n`;\nconst image = \"../images/logo.png\";\nconst name = \"../images/giftu.png\";\n\nconst Header = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 3\n    }\n  }, __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(LogoName, {\n    src: name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }), __jsx(WrapperMenu, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(Menu, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 6\n    }\n  }, \"MENU\"), __jsx(LogoImage, {\n    src: image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 6\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz82NDc4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiV3JhcHBlck1lbnUiLCJkaXYiLCJNZW51Iiwic3BhbiIsIkxvZ29JbWFnZSIsImltZyIsIkxvZ29OYW1lIiwiaW1hZ2UiLCJuYW1lIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQU0sQ0FBQ0MsT0FBUTs7O0NBQS9CO0FBS0EsTUFBTUMsV0FBVyxHQUFHRix3REFBTSxDQUFDRyxHQUFJOzs7Q0FBL0I7QUFLQSxNQUFNQyxJQUFJLEdBQUdKLHdEQUFNLENBQUNLLElBQUs7Ozs7Q0FBekI7QUFNQSxNQUFNQyxTQUFTLEdBQUdOLHdEQUFNLENBQUNPLEdBQUk7Ozs7Q0FBN0I7QUFNQSxNQUFNQyxRQUFRLEdBQUdSLHdEQUFNLENBQUNPLEdBQUk7Ozs7Q0FBNUI7QUFLQSxNQUFNRSxLQUFLLEdBQUcsb0JBQWQ7QUFDQSxNQUFNQyxJQUFJLEdBQUcscUJBQWI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDcEIsU0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsUUFBRDtBQUFVLE9BQUcsRUFBRUQsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFFQyxNQUFDLFNBQUQ7QUFBVyxPQUFHLEVBQUVELEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxDQUZELENBREQsQ0FERDtBQVdBLENBWkQ7O0FBY2VFLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgV3JhcHBlck1lbnUgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgTWVudSA9IHN0eWxlZC5zcGFuYFxuXHRmb250LXNpemU6IDMwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuXHRjb2xvcjogIzg3ZDNiODtcbmA7XG5cbmNvbnN0IExvZ29JbWFnZSA9IHN0eWxlZC5pbWdgXG5cdHBhZGRpbmc6IDEwcHggMjVweDtcblx0aGVpZ2h0OiA2MHB4O1xuXHR3aWR0aDogYXV0bztcbmA7XG5cbmNvbnN0IExvZ29OYW1lID0gc3R5bGVkLmltZ2Bcblx0cGFkZGluZzogMTBweDtcblx0aGVpZ2h0OiAzN3B4O1xuXHR3aWR0aDogYXV0bztcbmA7XG5jb25zdCBpbWFnZSA9IFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCI7XG5jb25zdCBuYW1lID0gXCIuLi9pbWFnZXMvZ2lmdHUucG5nXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8V3JhcHBlcj5cblx0XHRcdFx0PExvZ29OYW1lIHNyYz17bmFtZX0gLz5cblx0XHRcdFx0PFdyYXBwZXJNZW51PlxuXHRcdFx0XHRcdDxNZW51Pk1FTlU8L01lbnU+XG5cdFx0XHRcdFx0PExvZ29JbWFnZSBzcmM9e2ltYWdlfSAvPlxuXHRcdFx0XHQ8L1dyYXBwZXJNZW51PlxuXHRcdFx0PC9XcmFwcGVyPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/components/main.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: \"Quicksand\";\n`;\nconst WrapperTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\tmargin-top: 25px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`\n\ttext-align: center;\n\tcolor: black;\n\tfont-size: 50px;\n\tfont-family: \"Quicksand\";\n`;\nconst WrapperGifts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\tdisplay: flex;\n\tjustify-content: space-around;\n\twidth: 100vw;\n`;\nconst Wrappergift = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: \"Quicksand\";\n`;\nconst GiftTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`\n\ttext-align: center;\n\tcolor: black;\n\t// font-size: 50px;\n\tfont-family: \"Quicksand\";\n`;\nconst ColorLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`\n\twidth: 230px;\n\theight: 6px;\n\tbackground: white;\n\tbackground: linear-gradient(90deg, #ffab07 60%, white 60%);\n\tbackground: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n\tborder: ${props => props.primary ? \"1px solid #ffab07\" : \"1px solid #87d3b8\"};\n`;\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`\n\tcolor: ${props => props.primary ? \"#ffab07\" : \"#87d3b8\"};\n`;\n\nconst Main = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 3\n    }\n  }, __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }\n  }, __jsx(WrapperTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 6\n    }\n  }, \"HOLA, \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }), \"\\xBF \", __jsx(Span, {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 21\n    }\n  }, \"Q\"), \"U\\xC9 \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 46\n    }\n  }), \"QUIERES \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }), \"REGALAR \", __jsx(Span, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, \"?\"))), __jsx(WrapperGifts, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(Wrappergift, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 6\n    }\n  }, __jsx(GiftTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 15\n    }\n  }), \"RECOM \", __jsx(Span, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 14\n    }\n  }, \"\\xC9\"), \"NDADO\"), __jsx(ColorLine, {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  })), __jsx(Wrappergift, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 6\n    }\n  }, __jsx(GiftTitle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }, \"REGALO \", __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }), \"ID\", __jsx(Span, {\n    primary: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 10\n    }\n  }, \"E\"), \"AL\"), __jsx(ColorLine, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4uanM/ZWZmYiJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIldyYXBwZXJUaXRsZSIsImRpdiIsIlRpdGxlIiwiaDEiLCJXcmFwcGVyR2lmdHMiLCJXcmFwcGVyZ2lmdCIsIkdpZnRUaXRsZSIsImgyIiwiQ29sb3JMaW5lIiwiYnV0dG9uIiwicHJvcHMiLCJwcmltYXJ5IiwiU3BhbiIsInNwYW4iLCJNYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQU0sQ0FBQ0MsT0FBUTs7Ozs7OztDQUEvQjtBQVNBLE1BQU1DLFlBQVksR0FBR0Ysd0RBQU0sQ0FBQ0csR0FBSTs7Ozs7OztDQUFoQztBQVNBLE1BQU1DLEtBQUssR0FBR0osd0RBQU0sQ0FBQ0ssRUFBRzs7Ozs7Q0FBeEI7QUFPQSxNQUFNQyxZQUFZLEdBQUdOLHdEQUFNLENBQUNHLEdBQUk7Ozs7Q0FBaEM7QUFNQSxNQUFNSSxXQUFXLEdBQUdQLHdEQUFNLENBQUNHLEdBQUk7Ozs7Ozs7Q0FBL0I7QUFTQSxNQUFNSyxTQUFTLEdBQUdSLHdEQUFNLENBQUNTLEVBQUc7Ozs7O0NBQTVCO0FBT0EsTUFBTUMsU0FBUyxHQUFHVix3REFBTSxDQUFDVyxNQUFPOzs7OztlQUtoQkMsS0FBRCxJQUFZQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsU0FBVztXQUN0REQsS0FBRCxJQUNUQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsbUJBQWhCLEdBQXNDLG1CQUFvQjtDQVA1RDtBQVVBLE1BQU1DLElBQUksR0FBR2Qsd0RBQU0sQ0FBQ2UsSUFBSztVQUNkSCxLQUFELElBQVlBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0QixTQUFXO0NBRDdEOztBQUlBLE1BQU1HLElBQUksR0FBRyxNQUFNO0FBQ2xCLFNBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ087QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURQLFdBQ2UsTUFBQyxJQUFEO0FBQU0sV0FBTyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEZixZQUN3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHhDLGNBRVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZULGNBR1MsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIVCxDQURELENBREQsRUFRQyxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLFlBRU8sTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUCxVQURELEVBS0MsTUFBQyxTQUFEO0FBQVcsV0FBTyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERCxFQVFDLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSLFFBRUcsTUFBQyxJQUFEO0FBQU0sV0FBTyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGSCxPQURELEVBS0MsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQVJELENBUkQsQ0FERCxDQUREO0FBNkJBLENBOUJEOztBQWdDZUEsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG5gO1xuXG5jb25zdCBXcmFwcGVyVGl0bGUgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tdG9wOiAyNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDUwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuYDtcblxuY29uc3QgV3JhcHBlckdpZnRzID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdHdpZHRoOiAxMDB2dztcbmA7XG5cbmNvbnN0IFdyYXBwZXJnaWZ0ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG5gO1xuXG5jb25zdCBHaWZ0VGl0bGUgPSBzdHlsZWQuaDJgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IGJsYWNrO1xuXHQvLyBmb250LXNpemU6IDUwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuYDtcblxuY29uc3QgQ29sb3JMaW5lID0gc3R5bGVkLmJ1dHRvbmBcblx0d2lkdGg6IDIzMHB4O1xuXHRoZWlnaHQ6IDZweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmYWIwNyA2MCUsIHdoaXRlIDYwJSk7XG5cdGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/IFwiI2ZmYWIwN1wiIDogXCIjODdkM2I4XCIpfTtcblx0Ym9yZGVyOiAkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5wcmltYXJ5ID8gXCIxcHggc29saWQgI2ZmYWIwN1wiIDogXCIxcHggc29saWQgIzg3ZDNiOFwifTtcbmA7XG5cbmNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcblx0Y29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMucHJpbWFyeSA/IFwiI2ZmYWIwN1wiIDogXCIjODdkM2I4XCIpfTtcbmA7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFdyYXBwZXI+XG5cdFx0XHRcdDxXcmFwcGVyVGl0bGU+XG5cdFx0XHRcdFx0PFRpdGxlPlxuXHRcdFx0XHRcdFx0SE9MQSwgPGJyIC8+wr8gPFNwYW4gcHJpbWFyeT5RPC9TcGFuPlXDiSA8YnIgLz5cblx0XHRcdFx0XHRcdFFVSUVSRVMgPGJyIC8+XG5cdFx0XHRcdFx0XHRSRUdBTEFSIDxTcGFuPj88L1NwYW4+XG5cdFx0XHRcdFx0PC9UaXRsZT5cblx0XHRcdFx0PC9XcmFwcGVyVGl0bGU+XG5cdFx0XHRcdDxXcmFwcGVyR2lmdHM+XG5cdFx0XHRcdFx0PFdyYXBwZXJnaWZ0PlxuXHRcdFx0XHRcdFx0PEdpZnRUaXRsZT5cblx0XHRcdFx0XHRcdFx0UkVHQUxPIDxiciAvPlxuXHRcdFx0XHRcdFx0XHRSRUNPTSA8U3Bhbj7DiTwvU3Bhbj5OREFET1xuXHRcdFx0XHRcdFx0PC9HaWZ0VGl0bGU+XG5cdFx0XHRcdFx0XHQ8Q29sb3JMaW5lIHByaW1hcnkgLz5cblx0XHRcdFx0XHQ8L1dyYXBwZXJnaWZ0PlxuXHRcdFx0XHRcdDxXcmFwcGVyZ2lmdD5cblx0XHRcdFx0XHRcdDxHaWZ0VGl0bGU+XG5cdFx0XHRcdFx0XHRcdFJFR0FMTyA8YnIgLz5cblx0XHRcdFx0XHRcdFx0SUQ8U3BhbiBwcmltYXJ5PkU8L1NwYW4+QUxcblx0XHRcdFx0XHRcdDwvR2lmdFRpdGxlPlxuXHRcdFx0XHRcdFx0PENvbG9yTGluZSAvPlxuXHRcdFx0XHRcdDwvV3JhcHBlcmdpZnQ+XG5cdFx0XHRcdDwvV3JhcHBlckdpZnRzPlxuXHRcdFx0PC9XcmFwcGVyPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/GlobalStyle */ \"./Styles/GlobalStyle.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main */ \"./components/main.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\nvar _jsxFileName = \"/Users/jorgearguelles/Documents/fullstack/platzi/master/giftU/developFront/GiftU_frontend/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst App = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, __jsx(_Styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }\n  }), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }\n  }), __jsx(_components_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }\n  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtBQUNqQixTQUNDLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQUlDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELENBREQ7QUFRQSxDQVREOztBQVdlQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL1N0eWxlcy9HbG9iYWxTdHlsZVwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxHbG9iYWxTdHlsZSAvPlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PE1haW4gLz5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });