import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ActivityIndicator,
} from "react-native-paper";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.appTitle}>Valhalla Tracker</Title>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <TextInput
            label="Username"
            mode="outlined"
            selectionColor="#ffffff"
            style={styles.input}
          />
          <TextInput
            label="Password"
            mode="outlined"
            selectionColor="white"
            style={styles.input}
          />

          <Button mode="contained" style={styles.loginButton}>
            Login
          </Button>
          <ActivityIndicator
            animating={false}
            style={styles.activityIndicator}
          />
        </Card.Content>
      </Card>
      <Button>No Account? Register Here</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    minWidth: "80%",
    position: "relative",
    margin: 20,
  },
  appTitle: {
    marginTop: "20%",
    fontSize: 28,
    alignSelf: "center",
  },
  cardContent: {
    margin: 15,
  },
  activityIndicator: {
    marginTop: 25,
  },
  loginButton: {
    marginTop: 25,
  },
});
