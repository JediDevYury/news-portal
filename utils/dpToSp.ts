import { PixelRatio } from "react-native";

export const dpToSp = (dp: number) => dp * PixelRatio.getFontScale();
