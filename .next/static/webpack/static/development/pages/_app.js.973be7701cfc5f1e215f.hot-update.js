webpackHotUpdate("static\\development\\pages\\_app.js",{

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
var BEGIN_GAME = 'MainPage/BEGIN_GAME';
var LOGIN_PAGE = 'MainPage/LOGIN';
var PROFILE_PAGE = 'MainPage/PROFILE';
var beginGame = function beginGame() {
  return {
    type: BEGIN_GAME
  };
};
var showLoginPage = function showLoginPage() {
  return {
    type: LOGIN_PAGE
  };
};
var showEditProfilePage = function showEditProfilePage() {
  return {
    type: PROFILE_PAGE
  };
};
var STATE_MAIN_MENU = 'main';
var STATE_LOGIN = 'login';
var STATE_PROFILE = 'profile';
var STATE_PLAYING_GAME = 'playing';
var STATE_SHOWING_RANK = 'ranking';
var INITIAL_STATE = STATE_MAIN_MENU;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type;

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

/***/ })

})
//# sourceMappingURL=_app.js.973be7701cfc5f1e215f.hot-update.js.map