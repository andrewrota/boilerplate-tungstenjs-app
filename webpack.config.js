var path = require('path');
module.exports = function(env) {
  'use strict';
  var aliases = {}, env = env || {};
  if (env.dev) {
    aliases = {
      tungstenjs: 'tungstenjs/dist/tungsten.backbone.debug.web'
    };
  }
  return {
    entry: './js/app',
    output: {
      filename: './js/app.min.js',
      path: path.resolve('.')
    },
    resolve: {
      alias: aliases
    },
    resolveLoader: {
      modules: [path.join(__dirname, 'loaders'), path.join(__dirname, 'node_modules')]
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
};