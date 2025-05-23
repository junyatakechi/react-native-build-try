module.exports = {
  name: "React Native EAS Build Demo",
  slug: "react-native-build-try",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.example.easbuilddemo"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    },
    package: "com.example.easbuilddemo"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    // アプリ内でアクセス可能な環境変数
    apiUrl: process.env.API_URL || "default",
    appEnv: process.env.APP_ENV || "default",
    eas: {
      projectId: "20bcbbaa-cffd-4321-a2df-f7ca4172b27f"
    }
  }
};