// import React from 'react';
// import ReactDOM from 'react-dom';
var React = require('react');
var ReactDOM = require('react-dom');
// non JSX
var { h1 } = React.DOM;

var Profile = React.createClass({
  render () {
    // non JSX
    return h1({}, "Profile");

    // JSX
    // return <h1>Profile</h1>
  }
});

ReactDOM.render(<Profile/>, document.getElementById('app'));
