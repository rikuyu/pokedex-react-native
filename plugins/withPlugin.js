const { withAndroidManifest, withInfoPlist } = require('expo/config-plugins');

const withAndroidPlugin = config =>
  withAndroidManifest(config, config => {
    const mainApp = config?.modResults?.manifest?.application?.[0];
    if (mainApp) {
      if (!mainApp["meta-data"]) {
        mainApp["meta-data"] = [];
      }
      mainApp["meta-data"].push({
        $: {
          "android:name": "HelloAndroid",
          "android:value": "Hello.Android.Plugin",
        },
      });
    }
    return config;
  });

const withIosPlugin = config =>
  withInfoPlist(config, config => {
    config.modResults.HelloIos = "Hello.iOS.Plugin";
    return config;
  });

const withPlugin = config => {
  config = withAndroidPlugin(config);
  config = withIosPlugin(config);
  return config;
};

module.exports = withPlugin;
