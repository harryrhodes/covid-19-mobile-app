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
  Text,
} from "react-native-paper";
import UserService from "../Services/UserService";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const [animate, setAnimate] = useState(false);

  const validateInputs = async (username, password, confirmPassword) => {
    setAnimate(true);
    const pwRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (username == "") {
      setErrorText("This field is required");
      setUsernameError(true);
      setAnimate(false);
    } else {
      let res = await UserService.getSingle(username);
      if (res.count != 0) {
        setErrorText("Sorry This Username Is Already Taken");
        setUsernameError(true);
        setAnimate(false);
      } else {
        setUsernameError(false);
        if (password == "") {
          setErrorText("This field is required");
          setPasswordError(true);
          setAnimate(false);
        } else if (!pwRe.test(password)) {
          setErrorText("Your password is not strong enough");
          setPasswordError(true);
          setAnimate(false);
        } else {
          setPasswordError(false);
          if (confirmPassword == "") {
            setErrorText("This field is required");
            setPassword2Error(true);
            setAnimate(false);
          } else if (password != confirmPassword) {
            setErrorText("Passwords do not match");
            setPassword2Error(true);
            setAnimate(false);
          } else {
            setPassword2Error(false);
            navigation.navigate("Register-2", {
              userObj: { username: username, password: password },
            });
          }
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Title style={styles.appTitle}>Register</Title>
          <ProgressBar style={styles.progressBar} progress={0.25} />
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <TextInput
              label="Username (Required)"
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
            <Text style={styles.Text}>Password requirements:</Text>
            <Text style={styles.Text}>- 8 characters minimum</Text>
            <Text style={styles.Text}>- 1 uppercase, lowercase and letter</Text>
            <Text style={styles.Text}>- no symbols</Text>
            <TextInput
              label="Password (Required)"
              mode="outlined"
              selectionColor="#ffffff"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={password}
              error={passwordError}
              onChangeText={(password) => setPassword(password)}
            />
            <HelperText type="error" visible={passwordError}>
              {errorText}
            </HelperText>
            <TextInput
              label="Confirm Password (Required)"
              mode="outlined"
              selectionColor="#ffffff"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={confirmPassword}
              error={password2Error}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
            <HelperText type="error" visible={password2Error}>
              {errorText}
            </HelperText>
            <Text style={styles.Text}>You need these to sign in, please remember them.</Text>
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
  Text: {
    textAlign: "center",
  },
});
