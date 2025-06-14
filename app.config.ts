import "ts-node/register";

import { ExpoConfig } from "expo/config";

module.exports = ({ config }: {config: ExpoConfig}): ExpoConfig => {

  return {
    name: "pokedex",
    slug: "pokedex",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/pokedex_icon.png",
    scheme: "pokedex",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.rikuyu.pokedex",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      }
    },
    android: {
        adaptiveIcon: {
          foregroundImage: "./assets/images/pokedex_android_icon.png"
        },
        package: "com.rikuyu.pokedex",
        googleServicesFile: "./google-services.json"
    },
    plugins: [
      "expo-router",
      "expo-sqlite",
      "expo-localization",
      [
        "expo-web-browser",
        {
          experimentalLauncherActivity: true
        }
      ],
      [
        "expo-notifications",
        {
          icon: "./assets/images/ic_poke_notification.png",
          color: "#fc4545",
          defaultChannel: "default",
          enableBackgroundRemoteNotifications: false
        }
      ],
      [
        "expo-font",
        {
          fonts: [
            "./assets/fonts/PKMN-REGULAR.ttf"
          ]
        }
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/pokedex_title.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#fe4f4a"
        }
      ],
      [
        "react-native-edge-to-edge",
        {
          android: {
            parentTheme: "Default",
            enforceNavigationBarContrast: false
          }
        }
      ],
      [
        "expo-quick-actions",
        {
          androidIcons: {
            search_icon: {
              foregroundImage: "./assets/images/ic_search.png",
              backgroundColor: "#ff4545"
            },
            mypage_icon: {
              foregroundImage: "./assets/images/ic_mypage.png",
              backgroundColor: "#ff4545"
            }
          }
        }
      ],
    ],
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "832a07d4-db8d-4c99-80a1-229634b2825a"
      }
    }
  };
}