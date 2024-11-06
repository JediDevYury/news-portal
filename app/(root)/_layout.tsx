import { DrawerContent } from "@/components/ui/drawer";
import HeaderBar from "@/components/ui/header-bar";
import { colors, typography } from "@/constants";
import { useUserStore } from "@/store/userStore";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  const { isAuthenticatedUser } = useUserStore();

  if (!isAuthenticatedUser) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
          drawerActiveBackgroundColor: colors.secondary["50"],
          drawerInactiveTintColor: colors.brand["700"],
          drawerActiveTintColor: colors.brand["100"],
          drawerLabelStyle: {
            ...typography.body2,
          },
          headerTintColor: colors.brand["100"],
          header: (props) => <HeaderBar {...props} />,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="(news)"
          options={{
            drawerLabel: "News",
            title: "News",
            sceneContainerStyle: { backgroundColor: colors.white },
          }}
        />
        <Drawer.Screen
          name="(team)"
          options={{
            drawerLabel: "Team",
            title: "Team",
          }}
        />
        <Drawer.Screen
          name="(locations)"
          options={{
            drawerLabel: "Locations",
            title: "Locations",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
