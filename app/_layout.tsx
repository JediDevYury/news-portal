import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

import { useEffect } from "react";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    EtelkaMedium: require("../assets/fonts/EtelkaMedium.otf"),
    EtelkaText: require("../assets/fonts/EtelkaText.otf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode={"light"}>
      <Stack>
        <Stack.Screen
          name="(root)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create-article"
          options={{
            title: "Create New Article",
            presentation: "modal",
          }}
        />
        <Stack.Screen name="onboarding" />
      </Stack>
    </GluestackUIProvider>
  );
}
