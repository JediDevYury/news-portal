import { FontLoader } from "@/components/ui/font-loader";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import client from "@/services/ApolloClient";
import { ApolloProvider } from "@apollo/client";

import { KeyboardProvider } from "react-native-keyboard-controller";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <KeyboardProvider>
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
      </KeyboardProvider>
    </>
  );
}
