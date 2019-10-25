webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/Login/Login.jsx":
/*!*********************************!*\
  !*** ./modules/Login/Login.jsx ***!
  \*********************************/
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
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");





var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\Login\\Login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Login =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _React$Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).call(this, props));
    _this.state = {
      phone: '',
      birthDate: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "5 pemain akan diundi secara acak untuk memenangkan hadiah A.")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "5 pemain dengan skor tertinggi akan memenangkan hadiah B.")), __jsx("div", {
        className: "d-flex flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "No. HP"), __jsx("input", {
        type: "phone",
        className: "form-control",
        id: "phone",
        placeholder: "08123456789",
        value: this.state.phone,
        onChange: this._onPhoneChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "birthDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Tanggal Lahir (DDMMYYYY, contoh: 25121997)"), __jsx("input", {
        type: "number",
        className: "form-control",
        id: "birthDate",
        placeholder: "25121997",
        value: this.state.birthDate,
        onChange: this._onBirthDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }))), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Pemenang hadiah akan dihubungi melalui nomor telepon yang diberikan pemain"), __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Tanggal lahir digunakan sebagai kata sandi pemain untuk melanjutkan permainan")));
    }
  }, {
    key: "_onPhoneChange",
    value: function _onPhoneChange(event) {
      this.setState({
        phone: event.target.value
      });
    }
  }, {
    key: "_onBirthDateChange",
    value: function _onBirthDateChange(event) {
      this.setState({
        birth: event.target.value
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

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
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Login/Login */ "./modules/Login/Login.jsx");





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
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-6 col-sm-12 d-flex flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_9__["STATE_LOGIN"] && __jsx(_Login_Login__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_9__["STATE_MAIN_MENU"] && __jsx(_components_MainMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onBeginAnon: this.props.beginGame,
        onBeginLogin: this.props.showLoginPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
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
          lineNumber: 31
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Ayo main kata")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(_WordPair_WordPair__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Jawab:")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_Annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
    },
    showLoginPage: function showLoginPage() {
      return dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_9__["showLoginPage"])());
    }
  };
};

var MainPageConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(MainPage);
/* harmony default export */ __webpack_exports__["default"] = (MainPageConnected);

/***/ })

})
//# sourceMappingURL=index.js.a4c5954da9e77561ad53.hot-update.js.map