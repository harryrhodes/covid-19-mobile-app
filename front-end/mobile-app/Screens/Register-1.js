import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ActivityIndicator,
  ProgressBar,
  HelperText,
} from "react-native-paper";
import UserService from "../Services/UserService";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [animate, setAnimate] = useState(false);

  const validateInputs = async (username, password, confirmPassword) => {
    setAnimate(true);
    let res = await UserService.getSingle(username);
    if (res.count != 0) {
      setErrorText("Sorry This Username Is Already Taken");
      setUsernameError(true);
      setAnimate(false);
    } else {
      setUsernameError(false);
      if (password != confirmPassword) {
        setErrorText("Your passwords Do Not Match!");
        setPasswordError(true);
        setAnimate(false);
      } else {
        setPasswordError(false);
        navigation.navigate("Register-2", {
          userObj: { username: username, password: password },
        });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Title style={styles.appTitle}>Register</Title>
          <ProgressBar style={styles.progressBar} progress={0.2} />
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <TextInput
              label="Username"
              mode="outlined"
              selectionColor="#ffffff"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={username}
              error={usernameError}
              onChangeText={(username) => setUsername(username)}
            />
            <HelperText type="error" visible={usernameError}>
              {errorText}
            </HelperText>
            <TextInput
              label="Password"
              mode="outlined"
              selectionColor="#ffffff"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            <TextInput
              label="Confirm Password"
              mode="outlined"
              selectionColor="#ffffff"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              value={confirmPassword}
              error={passwordError}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
            <HelperText type="error" visible={passwordError}>
              {errorText}
            </HelperText>
            <Button
              mode="contained"
              style={styles.continueButton}
              onPress={() =>
                validateInputs(username, password, confirmPassword)
              }
            >
              Continue
            </Button>
            <ActivityIndicator
              animating={animate}
              style={styles.activityIndicator}
            />
          </Card.Content>
        </Card>
      </ScrollView>
      <Button onPress={() => navigation.goBack()}>
        Already Have An Account? Login Here
      </Button>
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
  continueButton: {
    marginTop: 25,
    marginBottom: 25,
  },
  progressBar: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
