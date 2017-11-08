/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
