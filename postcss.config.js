/* eslint-env node */

module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require('autoprefixer')
  ]
};
