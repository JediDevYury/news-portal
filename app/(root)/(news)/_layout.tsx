import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "News",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="news/[articleId]/article"
        options={{
          title: "News Article",
        }}
      />
      <Stack.Screen
        name="news/[articleId]/edit"
        options={{
          title: "Edit Article",
        }}
      />
    </Stack>
  );
}
