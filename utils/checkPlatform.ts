import { Platform } from "react-native";

export const checkPlatform = () => ({
  isWeb: Platform.OS === "web",
  isAndroid: Platform.OS === "android",
  isIOS: Platform.OS === "ios",
});
