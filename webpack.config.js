var path = require('path');
var webpack = require('webpack');
 
module.exports = {

  entry: './src/App.jsx',

  output: { 
    path: __dirname, 
    filename: 'bundle.js' 
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};