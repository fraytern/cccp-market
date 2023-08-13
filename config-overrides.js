const path = require('path');
const resolve = require('resolve');

module.exports = function override(config, env) {
  // Add a resolve fallback for the 'stream' module
  config.resolve.fallback = {
    stream: require.resolve('stream-browserify'),
  };

  return config;
};
