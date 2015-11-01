webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// non JSX
	// var { h1 } = React.DOM;

	var Home = _react2.default.createClass({
	  render: function render() {
	    // non JSX
	    // return h1({}, "Home");

	    // JSX
	    return _react2.default.createElement(
	      'h1',
	      null,
	      'Home'
	    );
	  }
	});

	_reactDom2.default.render(_react2.default.createElement(Home, null), document.getElementById('app'));

/***/ }
]);