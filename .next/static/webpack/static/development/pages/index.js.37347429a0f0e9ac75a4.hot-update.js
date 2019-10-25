webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./modules/Annotation/components/AnnotationDetail.jsx":
/*!************************************************************!*\
  !*** ./modules/Annotation/components/AnnotationDetail.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_Center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/Center */ "./modules/shared/Center.jsx");






var _jsxFileName = "C:\\Users\\yerla\\UI\\Semester7\\TACodes\\word-relation-gamification-frontend\\modules\\Annotation\\components\\AnnotationDetail.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var AnnotationDetail =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnnotationDetail, _React$Component);

  function AnnotationDetail(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnotationDetail);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AnnotationDetail).call(this, props));
    _this.state = {
      isDetailed: false
    };
    _this._onShowDetail = _this._onShowDetail.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnotationDetail, [{
    key: "render",
    value: function render() {
      return this.state.isDetailed ? this._renderDetailed() : this._renderBrief();
    }
  }, {
    key: "_renderBrief",
    value: function _renderBrief() {
      return __jsx(_shared_Center__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, {
    key: "_onShowDetail",
    value: function _onShowDetail() {
      this.setState({
        isDetailed: true
      });
    }
  }, {
    key: "_renderDetailed",
    value: function _renderDetailed() {
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
  }]);

  return AnnotationDetail;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotationDetail);

/***/ })

})
//# sourceMappingURL=index.js.37347429a0f0e9ac75a4.hot-update.js.map