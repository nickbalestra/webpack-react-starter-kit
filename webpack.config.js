var webpack = require('webpack');

var plugins = [
  new webpack.optimize.CommonsChunkPlugin('public/common.js'),
];

module.exports = {

  entry: {
    Home: './app/Home.js',
    Profile: './app/Profile.js'
  },

  output: {
    filename: 'public/[name].js'
  },

  plugins: plugins,

  module: {
    loaders: [
      {test: /\.js$/, loader: "babel", query: {presets:['react', 'es2015']}}
    ]
  }
};
