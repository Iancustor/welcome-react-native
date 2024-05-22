import React from "react";
import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#bef264",
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="about/index" options={{ headerTitle: "About" }} />
    </Stack>
  );
}
