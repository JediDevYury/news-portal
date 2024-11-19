import { Platform } from "react-native";

export const platform = {
  isWeb: Platform.OS === "web",
  isAndroid: Platform.OS === "android",
  isIOS: Platform.OS === "ios",
};
