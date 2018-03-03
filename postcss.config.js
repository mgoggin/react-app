/* eslint-env node */

'use strict';

module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require('autoprefixer')
  ]
};
