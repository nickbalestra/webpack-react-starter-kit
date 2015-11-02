webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import React from 'react';
	// import ReactDOM from 'react-dom';
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	// non JSX
	var h1 = React.DOM.h1;

	var Profile = React.createClass({
	  render: function render() {
	    // non JSX
	    return h1({}, "Profile");

	    // JSX
	    // return <h1>Profile</h1>
	  }
	});

	ReactDOM.render(React.createElement(Profile, null), document.getElementById('app'));

/***/ }
]);