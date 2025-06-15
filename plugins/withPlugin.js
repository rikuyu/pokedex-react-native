const { withAndroidManifest, withInfoPlist } = require('expo/config-plugins');

const withAndroidPlugin = (config, options = {}) =>
  withAndroidManifest(config, config => {
    const mainApp = config?.modResults?.manifest?.application?.[0];
    if (mainApp) {
      if (!mainApp["meta-data"]) {
        mainApp["meta-data"] = [];
      }
      mainApp["meta-data"].push({
        $: {
          "android:name": "HelloAndroid",
          "android:value": `Inject.Test.Android.Plugin[${options?.message || "default"}]`,
        },
      });
    }
    return config;
  });

const withIosPlugin = (config, options = {}) =>
  withInfoPlist(config, config => {
    config.modResults.HelloIos = `Inject.Test.iOS.Plugin[${options?.message || "default"}]`;
    return config;
  });

const withPlugin = (config, options = {}) => {
  config = withAndroidPlugin(config, options);
  config = withIosPlugin(config, options);
  return config;
};

module.exports = withPlugin;
