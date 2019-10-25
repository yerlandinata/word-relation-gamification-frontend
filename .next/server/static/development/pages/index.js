module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/Annotation/AnnotationList.jsx":
/*!***********************************************!*\
  !*** ./modules/Annotation/AnnotationList.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");
/* harmony import */ var _components_AnnotationDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AnnotationDetail */ "./modules/Annotation/components/AnnotationDetail.jsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./modules/Annotation/reducer.js");

var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\Annotation\\AnnotationList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class AnnotationList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this._createAnnotationDescription = this._createAnnotationDescription.bind(this);
  }

  render() {
    return this.props.isLoading ? __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "loading..") : __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.wordRelationTypes.map((wrt, i) => __jsx("div", {
      key: i,
      className: "m-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_components_AnnotationDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
      desc: this._createAnnotationDescription(wrt.description),
      onSubmitLowConfidence: this._createLowConfidenceSubmissionHandler(wrt.id),
      onSubmitHighConfidence: this._createHighConfidenceSubmissionHandler(wrt.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }))));
  }

  _createAnnotationDescription(desc) {
    return desc.replace(/\%a/g, this.props.wordPair.word1).replace(/\%b/g, this.props.wordPair.word2);
  }

  _createLowConfidenceSubmissionHandler(wrtId) {
    return () => this.props.submitLowConfidence(this.props.wordPair.id, wrtId);
  }

  _createHighConfidenceSubmissionHandler(wrtId) {
    return () => this.props.submitHighConfidence(this.props.wordPair.id, wrtId);
  }

}

const mapStateToProps = state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.annotationState, {
  wordPair: state.wordPairState
});

const mapDispatchToProps = dispatch => ({
  submitLowConfidence: (wordPairId, wrtId) => dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_5__["postAnnotation"])(wordPairId, wrtId, false)),
  submitHighConfidence: (wordPairId, wrtId) => dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_5__["postAnnotation"])(wordPairId, wrtId, true))
});

const AnnotationListConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(AnnotationList);
/* harmony default export */ __webpack_exports__["default"] = (AnnotationListConnected);

/***/ }),

/***/ "./modules/Annotation/components/AnnotationDetail.jsx":
/*!************************************************************!*\
  !*** ./modules/Annotation/components/AnnotationDetail.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Center */ "./modules/shared/Center.jsx");
var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\Annotation\\components\\AnnotationDetail.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AnnotationDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailed: false
    };
    this._onShowDetail = this._onShowDetail.bind(this);
  }

  render() {
    return this.state.isDetailed ? this._renderDetailed() : this._renderBrief();
  }

  _renderBrief() {
    return __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "btn btn-outline-success",
      onClick: this._onShowDetail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.desc));
  }

  _onShowDetail() {
    this.setState({
      isDetailed: true
    });
  }

  _renderDetailed() {
    return __jsx("div", {
      className: "card border-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-success text-center p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.props.desc), __jsx("div", {
      className: "d-flex flex-row justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "btn btn-outline-success m-2",
      onClick: this.props.onSubmitLowConfidence,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "\u2713"), __jsx("button", {
      type: "button",
      className: "btn btn-outline-success m-2",
      onClick: this.props.onSubmitHighConfidence,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "\u2713 \u2713 \u2713"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnnotationDetail);

/***/ }),

/***/ "./modules/Annotation/reducer.js":
/*!***************************************!*\
  !*** ./modules/Annotation/reducer.js ***!
  \***************************************/
/*! exports provided: POST_ANNOTATION, POST_ANNOTATION_SUCCESS, POST_ANNOTATION_FAILURE, FETCH_WORD_RELATION_TYPES, FETCH_WORD_RELATION_TYPES_SUCCESS, FETCH_WORD_RELATION_TYPES_FAILURE, fetchWordRelationTypes, fetchWordRelationTypesSuccess, fetchWordRelationTypesFailure, postAnnotation, postAnnotationSuccess, postAnnotationFailure, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ANNOTATION", function() { return POST_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ANNOTATION_SUCCESS", function() { return POST_ANNOTATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ANNOTATION_FAILURE", function() { return POST_ANNOTATION_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORD_RELATION_TYPES", function() { return FETCH_WORD_RELATION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORD_RELATION_TYPES_SUCCESS", function() { return FETCH_WORD_RELATION_TYPES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORD_RELATION_TYPES_FAILURE", function() { return FETCH_WORD_RELATION_TYPES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordRelationTypes", function() { return fetchWordRelationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordRelationTypesSuccess", function() { return fetchWordRelationTypesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWordRelationTypesFailure", function() { return fetchWordRelationTypesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAnnotation", function() { return postAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAnnotationSuccess", function() { return postAnnotationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAnnotationFailure", function() { return postAnnotationFailure; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const POST_ANNOTATION = 'Annotation/POST';
const POST_ANNOTATION_SUCCESS = 'Annotation/POST_SUCCESS';
const POST_ANNOTATION_FAILURE = 'Annotation/POST_FAILURE';
const FETCH_WORD_RELATION_TYPES = 'Annotation/FETCH';
const FETCH_WORD_RELATION_TYPES_SUCCESS = 'Annotation/FETCH_SUCCESS';
const FETCH_WORD_RELATION_TYPES_FAILURE = 'Annotation/FETCH_FAILURE';
const fetchWordRelationTypes = () => ({
  type: FETCH_WORD_RELATION_TYPES
});
const fetchWordRelationTypesSuccess = wordRelationTypes => ({
  type: FETCH_WORD_RELATION_TYPES_SUCCESS,
  payload: wordRelationTypes
});
const fetchWordRelationTypesFailure = error => ({
  type: FETCH_WORD_RELATION_TYPES_FAILURE,
  payload: {
    error
  }
});
const postAnnotation = (wordPairId, wordRelationTypeId, isHighConfidence) => ({
  type: POST_ANNOTATION,
  payload: {
    wordPairId,
    wordRelationTypeId,
    isHighConfidence
  }
});
const postAnnotationSuccess = score => ({
  type: POST_ANNOTATION_SUCCESS,
  payload: {
    score
  }
});
const postAnnotationFailure = error => ({
  type: POST_ANNOTATION_FAILURE,
  payload: {
    error
  }
});
const INITIAL_STATE = {
  wordRelationTypes: [],
  isLoading: true
};

const reducer = (state = INITIAL_STATE, {
  type,
  payload
}) => {
  switch (type) {
    case POST_ANNOTATION:
    case FETCH_WORD_RELATION_TYPES:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: true
      });

    case POST_ANNOTATION_FAILURE:
    case POST_ANNOTATION_SUCCESS:
    case FETCH_WORD_RELATION_TYPES_FAILURE:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false
      });

    case FETCH_WORD_RELATION_TYPES_SUCCESS:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isLoading: false,
        wordRelationTypes: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./modules/Login/Login.jsx":
/*!*********************************!*\
  !*** ./modules/Login/Login.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./modules/Login/reducer.js");

var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\Login\\Login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Login extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      birthDate: ''
    };
    this._onBirthDateChange = this._onBirthDateChange.bind(this);
    this._onPhoneChange = this._onPhoneChange.bind(this);
    this._onSubmitLogin = this._onSubmitLogin.bind(this);
  }

  render() {
    return __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }, "5 pemain akan diundi secara acak untuk memenangkan hadiah A.")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    }, "Lanjut")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

  _onPhoneChange(event) {
    if (!isNaN(event.target.value) && !event.target.value.includes(' ')) {
      this.setState({
        phone: event.target.value
      });
    }
  }

  _onBirthDateChange(event) {
    if (!isNaN(event.target.value) && !event.target.value.includes(' ')) {
      this.setState({
        birthDate: event.target.value
      });
    }
  }

  _onSubmitLogin() {
    this.props.submitLogin(this.state.phone, this.state.birthDate);
  }

}

const mapStateToProps = state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.loginState);

const mapDispatchToProps = dispatch => ({
  submitLogin: (phone, birthDate) => dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_4__["postLogin"])(phone, birthDate))
});

const LoginConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Login);
/* harmony default export */ __webpack_exports__["default"] = (LoginConnected);

/***/ }),

/***/ "./modules/Login/reducer.js":
/*!**********************************!*\
  !*** ./modules/Login/reducer.js ***!
  \**********************************/
/*! exports provided: POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE, postLogin, postLoginSuccess, postLoginFailure, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LOGIN", function() { return POST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LOGIN_SUCCESS", function() { return POST_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_LOGIN_FAILURE", function() { return POST_LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLogin", function() { return postLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLoginSuccess", function() { return postLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLoginFailure", function() { return postLoginFailure; });
const POST_LOGIN = 'Login/POST';
const POST_LOGIN_SUCCESS = 'Login/POST_SUCCESS';
const POST_LOGIN_FAILURE = 'Login/POST_FAILURE';
const postLogin = (phoneNumber, birthDate) => ({
  type: POST_LOGIN,
  payload: {
    phoneNumber,
    birthDate
  }
});
const postLoginSuccess = isNewUser => ({
  type: POST_LOGIN_SUCCESS,
  payload: {
    isNewUser
  }
});
const postLoginFailure = error => ({
  type: POST_LOGIN_FAILURE,
  payload: {
    error
  }
});
const INITIAL_STATE = {
  isLoading: false
};

const reducer = (state = INITIAL_STATE, {
  type
}) => {
  switch (type) {
    case POST_LOGIN:
      return {
        isLoading: true
      };

    case POST_LOGIN_FAILURE:
    case POST_LOGIN_SUCCESS:
      return {
        isLoading: false
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./modules/MainPage/MainPage.jsx":
/*!***************************************!*\
  !*** ./modules/MainPage/MainPage.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");
/* harmony import */ var _WordPair_WordPair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WordPair/WordPair */ "./modules/WordPair/WordPair.jsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./modules/MainPage/reducer.js");
/* harmony import */ var _Annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Annotation/AnnotationList */ "./modules/Annotation/AnnotationList.jsx");
/* harmony import */ var _components_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MainMenu */ "./modules/MainPage/components/MainMenu.jsx");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/Login */ "./modules/Login/Login.jsx");
var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\MainPage\\MainPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class MainPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    }, this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_4__["STATE_LOGIN"] && __jsx(_Login_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_4__["STATE_MAIN_MENU"] && __jsx(_components_MainMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onBeginAnon: this.props.beginGame,
      onBeginLogin: this.props.showLoginPage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), this.props.activity == _reducer__WEBPACK_IMPORTED_MODULE_4__["STATE_PLAYING_GAME"] && this._renderGame()));
  }

  _renderGame() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, "Ayo main kata")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(_WordPair_WordPair__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, "Jawab:")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(_Annotation_AnnotationList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => ({
  activity: state.mainPageState
});

const mapDispatchToProps = dispatch => ({
  beginGame: () => dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_4__["beginGame"])()),
  showLoginPage: () => dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_4__["showLoginPage"])())
});

const MainPageConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MainPage);
/* harmony default export */ __webpack_exports__["default"] = (MainPageConnected);

/***/ }),

/***/ "./modules/MainPage/components/MainMenu.jsx":
/*!**************************************************!*\
  !*** ./modules/MainPage/components/MainMenu.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Center */ "./modules/shared/Center.jsx");
var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\MainPage\\components\\MainMenu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MainMenu = ({
  onBeginAnon,
  onBeginLogin
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "mt-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Selamat datang di")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "mb-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Main Kata"), "!")), __jsx("div", {
  className: "d-flex flex-column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("button", {
  type: "button",
  className: "btn btn-outline-primary m-2",
  onClick: onBeginAnon,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Bermain tanpa hadiah"), __jsx("button", {
  type: "button",
  className: "btn btn-outline-primary m-2",
  onClick: onBeginLogin,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Bermain dengan hadiah")), __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "mt-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("span", {
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Beberapa data pribadi Anda akan dibutuhkan untuk memperoleh hadiah")));

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./modules/MainPage/reducer.js":
/*!*************************************!*\
  !*** ./modules/MainPage/reducer.js ***!
  \*************************************/
/*! exports provided: BEGIN_GAME, LOGIN_PAGE, PROFILE_PAGE, beginGame, showLoginPage, showEditProfilePage, STATE_MAIN_MENU, STATE_LOGIN, STATE_PROFILE, STATE_PLAYING_GAME, STATE_SHOWING_RANK, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEGIN_GAME", function() { return BEGIN_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_PAGE", function() { return PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beginGame", function() { return beginGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoginPage", function() { return showLoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditProfilePage", function() { return showEditProfilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_MAIN_MENU", function() { return STATE_MAIN_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_LOGIN", function() { return STATE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PROFILE", function() { return STATE_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PLAYING_GAME", function() { return STATE_PLAYING_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_SHOWING_RANK", function() { return STATE_SHOWING_RANK; });
const BEGIN_GAME = 'MainPage/BEGIN_GAME';
const LOGIN_PAGE = 'MainPage/LOGIN';
const PROFILE_PAGE = 'MainPage/PROFILE';
const beginGame = () => ({
  type: BEGIN_GAME
});
const showLoginPage = () => ({
  type: LOGIN_PAGE
});
const showEditProfilePage = () => ({
  type: PROFILE_PAGE
});
const STATE_MAIN_MENU = 'main';
const STATE_LOGIN = 'login';
const STATE_PROFILE = 'profile';
const STATE_PLAYING_GAME = 'playing';
const STATE_SHOWING_RANK = 'ranking';
const INITIAL_STATE = STATE_MAIN_MENU;

const reducer = (state = INITIAL_STATE, {
  type
}) => {
  switch (type) {
    case BEGIN_GAME:
      return STATE_PLAYING_GAME;

    case LOGIN_PAGE:
      return STATE_LOGIN;

    case STATE_PROFILE:
      return STATE_PROFILE;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./modules/WordPair/WordPair.jsx":
/*!***************************************!*\
  !*** ./modules/WordPair/WordPair.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_WordPairExample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/WordPairExample */ "./modules/WordPair/components/WordPairExample.jsx");
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Center */ "./modules/shared/Center.jsx");

var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\WordPair\\WordPair.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const desc = '%a adalah sejenis %b';

const WordPair = ({
  word1,
  word2,
  example,
  isLoading
}) => isLoading ? __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "loading..") : __jsx("div", {
  className: "d-flex flex-column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "mb-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, word1, " \u2192 ", word2)), __jsx(_components_WordPairExample__WEBPACK_IMPORTED_MODULE_3__["default"], {
  sentence: example,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

const mapStateToProps = state => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.wordPairState);

const WordPairConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(WordPair);
/* harmony default export */ __webpack_exports__["default"] = (WordPairConnected);

/***/ }),

/***/ "./modules/WordPair/components/WordPairExample.jsx":
/*!*********************************************************!*\
  !*** ./modules/WordPair/components/WordPairExample.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Center */ "./modules/shared/Center.jsx");
var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\WordPair\\components\\WordPairExample.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class WordPairExample extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    };
    this._onShowHintClick = this._onShowHintClick.bind(this);
  }

  render() {
    return this.state.isShowing ? this._renderShowing() : this._renderHiding();
  }

  _renderShowing() {
    return __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, this.props.sentence);
  }

  _renderHiding() {
    return __jsx("button", {
      type: "button",
      className: "btn btn-outline-primary",
      onClick: this._onShowHintClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Hint");
  }

  _onShowHintClick() {
    this.setState({
      isShowing: true
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WordPairExample);

/***/ }),

/***/ "./modules/shared/Center.jsx":
/*!***********************************!*\
  !*** ./modules/shared/Center.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\shared\\Center.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Center = ({
  children,
  className
}) => __jsx("div", {
  className: `d-flex flex-row justify-content-center ${className}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, children);

/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/MainPage/MainPage */ "./modules/MainPage/MainPage.jsx");
var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => __jsx(_modules_MainPage_MainPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yerla\UI\Semester7\TACodes\word-relation-gamification-frontend\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map