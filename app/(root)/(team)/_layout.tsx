import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="team"
        options={{
          title: "Team",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="team/[employeeId]/profile"
        options={{
          title: "Employee Profile",
        }}
      />
      <Stack.Screen
        name="team/[employeeId]/edit"
        options={{
          title: "Edit Employee Profile",
        }}
      />
      <Stack.Screen name="create-employee" />
    </Stack>
  );
}
