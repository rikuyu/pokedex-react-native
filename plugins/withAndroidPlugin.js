const {
  withAndroidManifest,
  withStringsXml,
  withGradleProperties,
  AndroidConfig,
} = require('expo/config-plugins');

const withAndroidPlugin = (config, options = {}) => {
  config = withAndroidManifest(config, config => {
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

  config = withStringsXml(config, config => {
    const strings = config.modResults;

    const updatedStrings = AndroidConfig.Strings.setStringItem([
      AndroidConfig.Resources.buildResourceItem({
        name: 'custom_key_one',
        value: 'こんにちは、私はピカチュウが好きです。',
        translatable: false,
      }),
      AndroidConfig.Resources.buildResourceItem({
        name: 'custom_key_two',
        value: 'withStringsXml',
        translatable: false,
      }),
    ], strings);

    config.modResults = updatedStrings;
    return config;
  });

  config = withGradleProperties(config, config => {
    config.modResults.push({
      type: 'property',
      key: 'myCustomFlag',
      value: 'true',
    });
    return config;
  });

  return config;
};

module.exports = withAndroidPlugin;
