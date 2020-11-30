import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  Subheading,
  Avatar,
  HelperText,
  ActivityIndicator,
} from "react-native-paper";
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";

export default function AccountSettings({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password2Error, setPassword2Error] = useState(false);
  const [usernameConfirmText, setUsernameConfirmText] = useState("");
  const [passwordConfirmText, setPasswordConfirmText] = useState("");
  const [animate, setAnimate] = useState(false);

  const labelTag =
    user.firstName.substring(0, 1) + user.lastName.substring(0, 1);
  const pwRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const validateUsername = async (username) => {
    let body = {
      password: user.password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: {},
      patientDetails: {},
    };
    setAnimate(true);
    if (username == "") {
      setFeedbackText(
        "To update your username, you need to input a new username"
      );
      setUsernameError(true);
      setAnimate(false);
    } else {
      let res = await UserService.getSingle(username);
      if (res.count != 0) {
        setFeedbackText("Sorry This Username Is Already Taken");
        setUsernameError(true);
        setAnimate(false);
      } else {
        setUsernameError(false);
        setUsernameConfirmText("Username successfully updated");
        let pwRes = await UserService.update(user.username, body.username);
        setUser(pwRes);
      }
    }
  };

  const validatePassword = async (password, confirmPassword) => {
    let body = {
      password: password,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: {},
      patientDetails: {},
    };
    setAnimate(true);
    if (password == "") {
      setFeedbackText("To update your password, please enter a password");
      setPasswordError(true);
      setAnimate(false);
    } else if (!pwRe.test(password)) {
      setFeedbackText("Your password is not strong enough");
      setPasswordError(true);
      setAnimate(false);
    } else {
      setPasswordError(false);
      if (confirmPassword == "") {
        setFeedbackText("This field is required");
        setPassword2Error(true);
        setAnimate(false);
      } else if (password != confirmPassword) {
        setFeedbackText("Passwords do not match");
        setPassword2Error(true);
        setAnimate(false);
      } else {
        setPassword2Error(false);
        setPasswordConfirmText("Password successfully updated");
        console.log(user.username, body);
        let unRes = await UserService.update(user.username, body);
        setUser(unRes);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Avatar.Text style={styles.avatar} size={72} label={labelTag} />
        <Title style={styles.title}>Account Settings</Title>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Subheading>Change Username</Subheading>
            <TextInput
              label={user.username}
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
              {feedbackText}
            </HelperText>
            <Button
              mode="contained"
              style={styles.continueButton}
              onPress={() => validateUsername(username)}
            >
              Change Username
            </Button>
            <HelperText type="info" visible={true}>
              {usernameConfirmText}
            </HelperText>
            <Subheading>Change Password</Subheading>
            <TextInput
              placeholder="Password"
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
              {feedbackText}
            </HelperText>
            <TextInput
              label="Confirm Password"
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
              {feedbackText}
            </HelperText>
            <ActivityIndicator
              animating={animate}
              style={styles.activityIndicator}
            />

            <Button
              mode="contained"
              style={styles.continueButton}
              onPress={() => validatePassword(password, confirmPassword)}
            >
              Change Password
            </Button>
            <HelperText type="info" visible={true}>
              {passwordConfirmText}
            </HelperText>
            <Subheading>Danger Zone</Subheading>
            <Button onPress={() => navigation.navigate("Register-1")}>
              Remove Account
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
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
  avatar: {
    marginTop: "20%",
    alignSelf: "center",
  },
  title: {
    marginTop: "5%",
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
