const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
});
