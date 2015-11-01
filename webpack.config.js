var webpack = require('webpack');

module.exports = {
  entry: {
    Home: './app/Home.js',
    Profile: './app/Profile.js'
  },

  output: {
    filename: 'pubic/[name].js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  }
};
