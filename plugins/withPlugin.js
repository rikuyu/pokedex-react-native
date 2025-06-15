const withAndroidPlugin = require('./withAndroidPlugin');
const withIosPlugin = require('./withIosPlugin');

const withPlugin = (config, options = {}) => {
  config = withAndroidPlugin(config, options);
  config = withIosPlugin(config, options);
  return config;
};

module.exports = withPlugin;
