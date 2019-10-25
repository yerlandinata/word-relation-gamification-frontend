webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/Login/Login.jsx":
/*!*********************************!*\
  !*** ./modules/Login/Login.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducer */ "./modules/Login/reducer.js");







var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\Login\\Login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Login =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _React$Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login).call(this, props));
    _this.state = {
      phone: '',
      birthDate: ''
    };
    _this._onBirthDateChange = _this._onBirthDateChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._onPhoneChange = _this._onPhoneChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this._onSubmitLogin = _this._onSubmitLogin.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "5 pemain akan diundi secara acak untuk memenangkan hadiah A.")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "m-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "5 pemain dengan skor tertinggi akan memenangkan hadiah B.")), __jsx("div", {
        className: "d-flex flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "No. HP"), __jsx("input", {
        type: "tel",
        className: "form-control",
        id: "phone",
        placeholder: "08123456789",
        value: this.state.phone,
        onChange: this._onPhoneChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), __jsx("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "birthDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Tanggal Lahir (DDMMYYYY, contoh: 25121997)"), __jsx("input", {
        className: "form-control",
        id: "birthDate",
        placeholder: "25121997",
        value: this.state.birthDate,
        onChange: this._onBirthDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), __jsx("button", {
        type: "button",
        className: "btn btn-primary m-2",
        onClick: this._onSubmitLogin,
        disabled: this.props.isLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Lanjut")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "mt-2 d-flex flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Pemenang hadiah akan dihubungi melalui nomor telepon yang diberikan pemain"), __jsx("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Tanggal lahir digunakan sebagai kata sandi pemain untuk melanjutkan permainan")));
    }
  }, {
    key: "_onPhoneChange",
    value: function _onPhoneChange(event) {
      if (!isNaN(event.target.value) && !event.target.value.includes(' ')) {
        this.setState({
          phone: event.target.value
        });
      }
    }
  }, {
    key: "_onBirthDateChange",
    value: function _onBirthDateChange(event) {
      if (!isNaN(event.target.value) && !event.target.value.includes(' ')) {
        this.setState({
          birth: event.target.value
        });
      }
    }
  }, {
    key: "_onSubmitLogin",
    value: function _onSubmitLogin() {
      this.props.submitLogin(this.state.phone, this.state.birthDate);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.loginState);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submitLogin: function submitLogin(phone, birthDate) {
      return dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_10__["postLogin"])(phone, birthDate));
    }
  };
};

var LoginConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Login);
/* harmony default export */ __webpack_exports__["default"] = (LoginConnected);

/***/ })

})
//# sourceMappingURL=index.js.b6579de96182b9548e9c.hot-update.js.map