import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "locations",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="locations"
        options={{
          title: "Locations",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
