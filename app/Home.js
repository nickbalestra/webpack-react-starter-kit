import React from 'react';
import ReactDOM from 'react-dom';

var { h1 } = React.DOM;

var Home = React.createClass({
  render () {
    return h1({}, "Home");
  }
});

ReactDOM.render(<Home/>, document.getElementById('app'));

