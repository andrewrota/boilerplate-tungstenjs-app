var path = require('path');
var webpackSettings = require('tungstenjs/webpack-helper.js');

module.exports = (function () {
  'use strict';
  return webpackSettings({
    entry: './js/app',
    output: {
      filename: './js/app.min.js',
      path: path.resolve('.')
    },
    resolve: {
      alias: {
        'jquery': 'backbone.native'
      }
    },
    resolveLoader: {
      modulesDirectories: [path.join(__dirname, 'node_modules')]
    },
    devtool: '#source-map',
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules/
      }]
    }
  });
}());