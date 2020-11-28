import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ActivityIndicator,
  HelperText,
} from "react-native-paper";
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";

export default function Login({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [animate, setAnimate] = useState(false);

  const login = async (username, password) => {
    setAnimate(true);
    let res = await UserService.login(username, password);
    if (res.status == "Success") {
      setUser(res.user);
    } else if (res.status == "Invalid Username/Email") {
      setUsernameError(true);
      setErrorText(res.status);
      console.log("un error: " + res.status)
      setAnimate(false);
    } else if (res.status == "Incorrect Password") {
      setPasswordError(true);
      setUsernameError(false)
      setErrorText(res.status);
      console.log("pw error: " + res.status)
      setAnimate(false);
    } else {
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title style={styles.appTitle}>Valhalla Tracker</Title>
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
              selectionColor="white"
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
            <Button
              mode="contained"
              style={styles.loginButton}
              onPress={() => login(username, password)}
            >
              Login
            </Button>
            <ActivityIndicator
              animating={animate}
              style={styles.activityIndicator}
            />
          </Card.Content>
        </Card>
      </ScrollView>
      <Button onPress={() => navigation.navigate("Register-1")}>
        No Account? Register Here
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
  activityIndicator: {
    marginTop: 25,
  },
  loginButton: {
    marginTop: 25,
  },
});
