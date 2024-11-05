import { FontLoader } from "@/components/ui/font-loader";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { checkPlatform } from "@/utils";

import { SafeAreaView } from "react-native-safe-area-context";

import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <SafeAreaView
        className="bg-secondary-100"
        edges={checkPlatform().isAndroid ? [] : ["top"]}
      />
      <FontLoader>
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
      </FontLoader>
    </>
  );
}
