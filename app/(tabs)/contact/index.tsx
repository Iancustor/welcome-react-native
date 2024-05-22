import React from "react";
import { View, Text } from "react-native";
export default function ContactPage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bef264",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "800",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        CONTACT ME
      </Text>
    </View>
  );
}
