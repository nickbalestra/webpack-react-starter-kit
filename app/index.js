// For a full ES6 example of this very same file check out
// https://github.com/nickbalestra/jspm-react-starter-kit/blob/master/app/index.js

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  getInitialState: function(){
    return {
      subject: 'World!'
    }
  },

  render: function() {
    return (
      <h1>Hello {this.state.subject}</h1>
    )
  }
});

ReactDOM.render(<HelloWorld/>, document.getElementById('app'));

