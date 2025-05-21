"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 9968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0__["default"].getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/favicon/apple-icon-57x57.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/favicon/apple-icon-60x60.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/favicon/apple-icon-72x72.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/favicon/apple-icon-76x76.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/favicon/apple-icon-114x114.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/favicon/apple-icon-120x120.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/favicon/apple-icon-144x144.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/favicon/apple-icon-152x152.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-icon-180x180.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicon/android-icon-192x192.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          rel: "manifest",
          href: "/favicon/manifest.json"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
          name: "msapplication-TileColor",
          content: "#ffffff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
          name: "msapplication-TileImage",
          content: "/ms-icon-144x144.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
          name: "theme-color",
          content: "#ffffff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,859], () => (__webpack_exec__(9968)));
module.exports = __webpack_exports__;

})();