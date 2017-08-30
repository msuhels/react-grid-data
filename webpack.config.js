var path = require('path');
var webpack = require('webpack');
console.log(path.join(__dirname, 'node_modules/'));
module.exports = {
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules/'),
        query: {
            presets: ['es2015']
        }
      }
    ]
  }
}