webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./config/redux.js":
/*!*************************!*\
  !*** ./config/redux.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-observable */ "./node_modules/redux-observable/lib/esm/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_MainPage_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/MainPage/reducer */ "./modules/MainPage/reducer.js");
/* harmony import */ var _modules_WordPair_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/WordPair/reducer */ "./modules/WordPair/reducer.js");
/* harmony import */ var _modules_WordPair_epics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/WordPair/epics */ "./modules/WordPair/epics.js");
/* harmony import */ var _modules_Annotation_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/Annotation/reducer */ "./modules/Annotation/reducer.js");
/* harmony import */ var _modules_Annotation_epics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/Annotation/epics */ "./modules/Annotation/epics.js");
/* harmony import */ var _modules_Login_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/Login/reducer */ "./modules/Login/reducer.js");












var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_4___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  wordPairState: _modules_WordPair_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  mainPageState: _modules_MainPage_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  annotationState: _modules_Annotation_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  loginState: _modules_Login_reducer__WEBPACK_IMPORTED_MODULE_10__["default"]
});
var rootEpic = Object(redux_observable__WEBPACK_IMPORTED_MODULE_2__["combineEpics"])(_modules_WordPair_epics__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_Annotation_epics__WEBPACK_IMPORTED_MODULE_9__["default"]);
function initStore(initialState) {
  var epicMiddleware = Object(redux_observable__WEBPACK_IMPORTED_MODULE_2__["createEpicMiddleware"])({
    dependencies: {
      apiBaseUrl: publicRuntimeConfig.apiBaseUrl
    }
  });
  var logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
    collapsed: true
  }); // log every action to see what's happening behind the scenes.

  var reduxMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(epicMiddleware, logger);
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(reduxMiddleware));
  epicMiddleware.run(rootEpic);
  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.256873ef2bb501d8a749.hot-update.js.map