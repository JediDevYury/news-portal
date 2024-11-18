import { Fab } from "@/components/ui/fab";

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(all-news)"
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
      <Fab href="/create-article" />
    </>
  );
}
