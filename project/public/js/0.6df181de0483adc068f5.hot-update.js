/*! lzccheng@版权所有，翻版必究 */
webpackHotUpdate(0,{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(55);

var _reactRedux = __webpack_require__(64);

var _redux = __webpack_require__(24);

var _comments = __webpack_require__(92);

var _comments2 = _interopRequireDefault(_comments);

var _App = __webpack_require__(93);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_comments2.default);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('box'));
(0, _reactDom.render)(_react2.default.createElement(
  'div',
  null,
  'lzccheng'
), document.getElementById('test'));

/***/ })

})