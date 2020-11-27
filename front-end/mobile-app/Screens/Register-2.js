import React, { useState, useContext } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ProgressBar,
  ActivityIndicator,
} from "react-native-paper";

export default function Register({ navigation, route }) {
  // const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nhsNo, setNhsNo] = useState("");
  const [niNo, setNiNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  // const [usernameError, setUsernameError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [animate, setAnimate] = useState(false);

  const validateInputs = async (
    email,
    firstName,
    lastName,
    nhsNo,
    niNo,
    mobileNo,
    existingObj
  ) => {
    let userObj = {
      ...existingObj,
      email: email,
      firstName: firstName,
      lastName: lastName,
      accountType: "patient",
      role: {},
      patientDetails: {
        nhsNo: nhsNo,
        niNo: niNo,
        mobileNo: mobileNo,
      },
      symptoms: [],
    };
    navigation.navigate("Register-3", {
      userObj,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={styles.appTitle}>Register</Title>
        <ProgressBar style={styles.progressBar} progress={0.5} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <TextInput
            label="Email Address"
            mode="outlined"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            error={false}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="First Name"
            mode="outlined"
            style={styles.input}
            autoCapitalize="characters"
            autoCorrect={false}
            value={firstName}
            error={false}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            style={styles.input}
            autoCapitalize="characters"
            autoCorrect={false}
            value={lastName}
            error={false}
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <TextInput
            label="NHS Number (Optional)"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={nhsNo}
            error={false}
            onChangeText={(nhsNo) => setNhsNo(nhsNo)}
          />
          <TextInput
            label="NI Number"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={niNo}
            error={false}
            onChangeText={(niNo) => setNiNo(niNo)}
          />
          <TextInput
            label="Mobile Number"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={mobileNo}
            error={false}
            onChangeText={(mobileNo) => setMobileNo(mobileNo)}
          />
          <Button
            mode="contained"
            style={styles.continueButton}
            onPress={() =>
              validateInputs(
                email,
                firstName,
                lastName,
                nhsNo,
                niNo,
                mobileNo,
                route.params.userObj
              )
            }
          >
            Continue
          </Button>
          <ActivityIndicator
            animating={false}
            style={styles.activityIndicator}
          />
        </Card.Content>
      </Card>
      <Button onPress={() => navigation.navigate("Login")}>
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
