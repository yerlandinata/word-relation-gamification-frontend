webpackHotUpdate("static\\development\\pages\\index.js",{

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

var POST_ANNOTATION = 'Annotation/POST';
var POST_ANNOTATION_SUCCESS = 'Annotation/POST_SUCCESS';
var POST_ANNOTATION_FAILURE = 'Annotation/POST_FAILURE';
var FETCH_WORD_RELATION_TYPES = 'Annotation/FETCH';
var FETCH_WORD_RELATION_TYPES_SUCCESS = 'Annotation/FETCH_SUCCESS';
var FETCH_WORD_RELATION_TYPES_FAILURE = 'Annotation/FETCH_FAILURE';
var fetchWordRelationTypes = function fetchWordRelationTypes() {
  return {
    type: FETCH_WORD_RELATION_TYPES
  };
};
var fetchWordRelationTypesSuccess = function fetchWordRelationTypesSuccess(wordRelationTypes) {
  return {
    type: FETCH_WORD_RELATION_TYPES_SUCCESS,
    payload: wordRelationTypes
  };
};
var fetchWordRelationTypesFailure = function fetchWordRelationTypesFailure(error) {
  return {
    type: FETCH_WORD_RELATION_TYPES_FAILURE,
    payload: {
      error: error
    }
  };
};
var postAnnotation = function postAnnotation(wordPairId, wordRelationTypeId, isHighConfidence) {
  return {
    type: POST_ANNOTATION,
    payload: {
      wordPairId: wordPairId,
      wordRelationTypeId: wordRelationTypeId,
      isHighConfidence: isHighConfidence
    }
  };
};
var postAnnotationSuccess = function postAnnotationSuccess(score) {
  return {
    type: POST_ANNOTATION_SUCCESS,
    payload: {
      score: score
    }
  };
};
var postAnnotationFailure = function postAnnotationFailure(error) {
  return {
    type: POST_ANNOTATION_FAILURE,
    payload: {
      error: error
    }
  };
};
var INITIAL_STATE = {
  wordRelationTypes: [],
  isLoading: true
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

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

/***/ })

})
//# sourceMappingURL=index.js.8ec0ee93ec8deb65dc88.hot-update.js.map