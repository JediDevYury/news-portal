import HeaderBar from "@/components/ui/header-bar/index.ios";
import { colors, typography } from "@/constants";
import { useUserStore } from "@/store/userStore";

import { Redirect, Tabs } from "expo-router";

import { LocationIcon, NewsIcon, TeamIcon } from "@/assets/icons";

export default function Layout() {
  const { isAuthenticatedUser } = useUserStore();

  if (!isAuthenticatedUser) {
    return <Redirect href={"/(auth)/sign-in"} />;
  }

  return (
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
        header: ({ options, navigation }) => (
          <HeaderBar options={options} navigation={navigation} />
        ),
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
          tabBarIcon: ({ color, size }) => (
            <LocationIcon color={color} width={size} height={size} />
          ),
        }}
      />
    </Tabs>
  );
}
