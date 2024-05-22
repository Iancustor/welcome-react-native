import React from "react";
import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "orange" }}>
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="Contact"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="phone" size={24} color={color} />
          ),
          title: "Contact",
        }}
      />
    </Tabs>
  );
}
