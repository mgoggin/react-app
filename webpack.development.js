/* eslint-env node */

'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  serve: {
    content: path.resolve(__dirname, 'dist'),
    host: process.env['WEBPACK_HOST'] || 'localhost',
    port: process.env['WEBPACK_PORT'] || 8000,
    dev: {
      publicPath: '/'
    },
    hot: {
      reload: true
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap!sass-loader?sourceMap&includePaths[]=' + path.resolve(__dirname, 'src')
        ]
      },
    ]
  }
});
