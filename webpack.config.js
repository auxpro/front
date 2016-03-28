var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
 module: {
  loaders: [{
    test: /\.js$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
  }],
  resolve: {
	  root: path.resolve('./src'),
      extensions: ['', '.js', '.jsx']
    }
}
};