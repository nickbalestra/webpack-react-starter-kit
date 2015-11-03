var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  
  output: {
    filename: 'public/bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: "babel", query: {presets:['react', 'es2015']}}
    ]
  }

  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('public/shared.js'),
  // ]
};
