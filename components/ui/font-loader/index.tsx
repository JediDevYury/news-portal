import { PropsWithChildren, useEffect } from "react";

import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

import { Loader } from "../loader";

export const FontLoader = ({ children }: PropsWithChildren) => {
  const [loaded, error] = useFonts({
    EtelkaMedium: require("@/assets/fonts/EtelkaMedium.otf"),
    EtelkaText: require("@/assets/fonts/EtelkaText.otf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return <Loader />;
  }

  return children;
};
