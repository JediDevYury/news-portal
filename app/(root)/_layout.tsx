import { DrawerContent, MenuButton } from "@/components/ui/drawer";
import { colors, typography } from "@/constants";
import { useUserStore } from "@/store/userStore";
import { checkPlatform } from "@/utils";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Redirect, Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

import {
  LocationIcon,
  MenuIcon,
  NewsIcon,
  SearchIcon,
  TeamIcon,
} from "@/assets/icons";

const tabs = (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: colors.brand["100"],
      tabBarInactiveTintColor: colors.brand["700"],
      tabBarLabelStyle: {
        ...typography.textSmall,
      },
      tabBarStyle: {
        paddingTop: 7,
        backgroundColor: colors.white,
        borderTopWidth: 1,
      },
      tabBarItemStyle: {
        gap: 6,
      },
      headerTintColor: colors.brand["100"],
      headerTitleAlign: "center",
      headerTitleStyle: {
        ...typography.h5Medium,
        color: colors.brand["600"],
      },
      headerStyle: {
        backgroundColor: colors.secondary["100"],
      },
    }}
  >
    <Tabs.Screen
      name="(news)"
      options={{
        tabBarLabel: "News",
        title: "News",
        headerShown: true,
        tabBarIcon: ({ color, size }) => (
          <NewsIcon color={color} width={size} height={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="(team)"
      options={{
        tabBarLabel: "Team",
        title: "Team",
        headerShown: true,
        tabBarIcon: ({ color, size }) => (
          <TeamIcon color={color} width={size} height={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="(locations)"
      options={{
        tabBarLabel: "Locations",
        title: "Locations",
        headerShown: true,
        tabBarIcon: ({ color, size }) => (
          <LocationIcon color={color} width={size} height={size} />
        ),
      }}
    />
  </Tabs>
);

const drawer = (
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
        headerStyle: {
          backgroundColor: colors.secondary["100"],
        },
        headerTitleStyle: {
          ...typography.h5Medium,
          color: colors.brand["600"],
        },
        headerShown: true,
        headerTransparent: false,
        sceneContainerStyle: {
          backgroundColor: colors.secondary["100"],
        },
        headerLeft: () => <MenuButton icon={MenuIcon} />,
        headerRight: () => <MenuButton icon={SearchIcon} />,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(news)"
        options={{
          drawerLabel: "News",
          title: "News",
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

export default function TabsLayout() {
  const { isAuthenticatedUser } = useUserStore();

  if (!isAuthenticatedUser) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }

  if (checkPlatform().isIOS) {
    return tabs;
  }

  return drawer;
}
