import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1976d2",
    alignItems: "center",
    justifyContent: "center",
  },
});
