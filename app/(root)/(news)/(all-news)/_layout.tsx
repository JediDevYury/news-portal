import { colors, typography } from "@/constants";
import { MaterialTopTabs } from "@/layouts/material-top-tabs";

const routes = [
  {
    name: "index",
    title: "All News",
  },
  {
    name: "events",
    title: "Events",
  },
  {
    name: "newcomers",
    title: "Newcomers",
  },
  {
    name: "company-life",
    title: "Company’s Life",
  },
];

export default function Layout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarGap: 30,
        tabBarPressColor: "transparent",
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          ...typography.subtitle2,
          textTransform: "capitalize",
          textAlign: "center",
          backgroundColor: colors.secondary["50"],
          margin: 0,
          padding: 0,
        },
        tabBarItemStyle: {
          margin: 0,
          padding: 0,
          width: "auto",
        },
        tabBarAllowFontScaling: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.brand["100"],
        },
        tabBarStyle: {
          elevation: 0,
          marginLeft: 16,
          marginRight: 8,
          backgroundColor: colors.secondary["50"],
        },
      }}
    >
      {routes.map((route) => (
        <MaterialTopTabs.Screen
          key={route.name}
          name={route.name}
          options={{
            title: route.title,
          }}
        />
      ))}
    </MaterialTopTabs>
  );
}
