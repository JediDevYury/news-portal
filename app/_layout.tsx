import { FontLoader } from "@/components/ui/font-loader";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Loader } from "@/components/ui/loader";
import "@/global.css";

import { Suspense } from "react";

import { SplashScreen, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}
