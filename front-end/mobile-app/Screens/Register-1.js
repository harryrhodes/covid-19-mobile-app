import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ProgressBar,
} from "react-native-paper";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={styles.appTitle}>Register</Title>
        <ProgressBar style={styles.progressBar} progress={0.2} />
      </View>

      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <TextInput label="Username" mode="outlined" style={styles.input} />
          <TextInput label="Password" mode="outlined" style={styles.input} />
          <TextInput
            label="Confirm Password"
            mode="outlined"
            style={styles.input}
          />
          <Button style={styles.nextButton} mode="contained">
            Continue
          </Button>
        </Card.Content>
      </Card>
      <Button>Already Have An Account? Login Here</Button>
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
  nextButton: {
    marginTop: 25,
    marginBottom: 25,
  },
  progressBar: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
