import React from 'react';
import ReactDOM from 'react-dom';

// non JSX
// var { h1 } = React.DOM;

var Home = React.createClass({
  render () {
    // non JSX
    // return h1({}, "Home");

    // JSX
    return <h1>Home</h1>
  }
});

ReactDOM.render(<Home/>, document.getElementById('app'));

