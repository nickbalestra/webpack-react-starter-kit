var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
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

ReactDOM.render(<Home/>, document.getElementById('app'));

