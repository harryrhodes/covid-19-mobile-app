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
  const [animate, setAnimate] = useState(false);

  const validateInputs = async (
    username,
    password,
    confirmPassword,
    updateUsername,
    updatePassword
  ) => {
    setAnimate(true);
    if (!username) {
      console.log("password");
    } else if (!password) {
      console.log("username");
    }
    let res = await UserService.getSingle(username);
    if (res.count != 0) {
      setFeedbackText("Sorry This Username Is Already Taken");
      setUsernameError(true);
      setAnimate(false);
    } else {
      setUsernameError(false);
      if (password != confirmPassword) {
        setFeedbackText("Your Passwords Do Not Match!");
        setPasswordError(true);
        setAnimate(false);
      } else {
        setPasswordError(false);
        setAnimate(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Avatar.Text style={styles.avatar} size={72} label="HR" />
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
              onPress={() =>
                validateInputs(username, password, confirmPassword)
              }
            >
              Change Username
            </Button>
            <HelperText type="info" visible={true}>
              {feedbackText} Username Updated!
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
              onChangeText={(password) => setPassword(password)}
            />
            <TextInput
              label="Confirm Password"
              mode="outlined"
              selectionColor="#ffffff"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={confirmPassword}
              error={passwordError}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
            <HelperText type="error" visible={passwordError}>
              {feedbackText}
            </HelperText>
            <ActivityIndicator
              animating={animate}
              style={styles.activityIndicator}
            />

            <Button
              mode="contained"
              style={styles.continueButton}
              onPress={() =>
                validateInputs(
                  username,
                  password,
                  confirmPassword,
                  (updateUsername = false),
                  (updatePassword = true)
                )
              }
            >
              Change Password
            </Button>
            <HelperText type="info" visible={true}>
              {feedbackText} Password Updated!
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
