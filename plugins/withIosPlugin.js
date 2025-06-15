const { withInfoPlist } = require('expo/config-plugins');

const withIosPlugin = (config, options = {}) =>
  withInfoPlist(config, config => {
    config.modResults.HelloIos = `Inject.Test.iOS.Plugin[${options?.message || "default"}]`;
    return config;
  });

module.exports = withIosPlugin;
