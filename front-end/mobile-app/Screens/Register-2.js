import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ProgressBar,
  ActivityIndicator,
} from "react-native-paper";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={styles.appTitle}>Register</Title>
        <ProgressBar style={styles.progressBar} progress={0.8} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <TextInput label="First Name" mode="outlined" style={styles.input} />
          <TextInput label="Last Name" mode="outlined" style={styles.input} />
          <TextInput label="NHS Number" mode="outlined" style={styles.input} />
          <TextInput label="NI Number" mode="outlined" style={styles.input} />
          <TextInput
            label="Mobile Number"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Email Address"
            mode="outlined"
            style={styles.input}
          />

          <Button style={styles.registerButton} mode="contained">
            Register
          </Button>
          <ActivityIndicator
            animating={false}
            style={styles.activityIndicator}
          />
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
  activityIndicator: {
    marginTop: 25,
  },
  registerButton: {
    marginTop: 25,
  },
  progressBar: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
