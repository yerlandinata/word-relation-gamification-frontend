webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/MainPage/MainPage.jsx":
/*!***************************************!*\
  !*** ./modules/MainPage/MainPage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");
/* harmony import */ var _WordPair_WordPair__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../WordPair/WordPair */ "./modules/WordPair/WordPair.jsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducer */ "./modules/MainPage/reducer.js");
/* harmony import */ var _Annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Annotation/AnnotationList */ "./modules/Annotation/AnnotationList.jsx");
/* harmony import */ var _components_MainMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/MainMenu */ "./modules/MainPage/components/MainMenu.jsx");





var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\MainPage\\MainPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var MainPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainPage, _React$Component);

  function MainPage(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-6 col-sm-12 d-flex flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_9__["STATE_MAIN_MENU"] && __jsx(_components_MainMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_9__["STATE_PLAYING_GAME"] && this._renderGame()));
    }
  }, {
    key: "_renderGame",
    value: function _renderGame() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Ayo main kata")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(_WordPair_WordPair__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Jawab:")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_Annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })));
    }
  }]);

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    activity: state.mainPageState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    beginGame: function beginGame() {
      return dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_9__["beginGame"])());
    }
  };
};

var MainPageConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(MainPage);
/* harmony default export */ __webpack_exports__["default"] = (MainPageConnected);

/***/ })

})
//# sourceMappingURL=index.js.8511cdbe6e42f08e01ef.hot-update.js.map