var path = require('path');
module.exports = (function() {
  'use strict';
  return {
    entry: './js/app',
    output: {
      filename: './js/app.min.js',
      path: path.resolve('.')
    },
    resolveLoader: {
      modulesDirectories: [path.join(__dirname, 'loaders'), path.join(__dirname, 'node_modules')]
    },
    devtool: '#source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.mustache$/,
          loader: 'template_loader',
          exclude: /node_modules/
        }
      ]
    }
  };
}());