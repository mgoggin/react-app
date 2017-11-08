/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const extractStyles = new ExtractTextPlugin({
  filename: '[name].bundle.[hash].css',
  allChunks: true
});

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: extractStyles.extract({
          fallback: 'style-loader?sourceMap',
          use: 'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap&!sass-loader?includePaths[]=' + path.resolve(__dirname, 'src')
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    extractStyles,
    new CompressionWebpackPlugin({
      test: /\.(js|css|html|png|jpg|gif|svg)$/,
      asset: '[path].gz[query]',
      threshold: 4096,
      minRatio: 0.6
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
