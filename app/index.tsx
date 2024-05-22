import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>READY TO EXPLORE MORE ABOUT MOBILE APPS</Text>
      <Text style={styles.subtitle}>Welcome to My First Mobile App</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </Pressable>
        <Link href="/about" style={styles.buttonSecondary}>
          About Me
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bef264", // Nice background color
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#eff6ff",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonSecondary: {
    backgroundColor: "#eff6ff",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "500",
  },
  buttonTextSecondary: {
    color: "#000000",
    fontWeight: "500",
  },
});
