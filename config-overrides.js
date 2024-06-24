const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
  };
  config.plugins = (config.plugins || []).concat([
    new NodePolyfillPlugin(),
  ]);
  return config;
}