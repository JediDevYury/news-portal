import { FontLoader } from "@/components/ui/font-loader";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import client from "@/services/ApolloClient";
import { platform } from "@/utils/platform";
import { ApolloProvider } from "@apollo/client";

import { SafeAreaView } from "react-native-safe-area-context";

import { SplashScreen, Stack } from "expo-router";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <SafeAreaView
        className="bg-secondary-100"
        edges={platform.isAndroid ? [] : ["top"]}
      />
      <ApolloProvider client={client}>
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
              <Stack.Screen name="user-profile" />
            </Stack>
          </GluestackUIProvider>
        </FontLoader>
      </ApolloProvider>
    </>
  );
}
