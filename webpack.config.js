var webpack = require('webpack');


module.exports = {
  entry: {
    Home: './app/Home.js',
    Profile: './app/Profile.js'
  },

  output: {
    filename: 'public/[name].js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('public/shared.js'),
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: "babel", query: {presets:['react', 'es2015']}}
    ]
  }
};
