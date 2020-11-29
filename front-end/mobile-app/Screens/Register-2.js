import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ProgressBar,
  ActivityIndicator,
  HelperText,
} from "react-native-paper";

export default function Register({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nhsNo, setNhsNo] = useState("");
  const [niNo, setNiNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [errorText, setErrorText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [nhsError, setNhsError] = useState(false);
  const [niError, setNiError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const validateInputs = async (
    email,
    firstName,
    lastName,
    nhsNo,
    niNo,
    mobileNo,
    existingObj
  ) => {
    setAnimate(true);
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const niRe = /^(?!BG|GB|NK|KN|TN|NT|ZZ)[ABCEGHJ-PRSTW-Z][ABCEGHJ-NPRSTW-Z]\s*\d{2}\s*\d{2}\s*\d{2}\s*[A-D]$/;

    const validateNhsNumber = (nhsNo) => {
      if (!nhsNo == "") {
        if (!/^\d+$/.test(nhsNo)) {
          setErrorText("Your NHS number can only contain digits");
          setNhsError(true);
          setAnimate(false);
        } else if (!/^\d{10}$/.test(nhsNo)) {
          setErrorText("Your NHS must be 10 digits exactly");
          setNhsError(true);
          setAnimate(false);
        } else {
          setNhsError(false);
        }
      } else {
        setNhsError(false)
      }
    };

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
    if (!emailRe.test(email)) {
      setErrorText("Please enter a valid email");
      setEmailError(true);
      setAnimate(false);
    } else {
      setEmailError(false);
      if (firstName.length <= 2) {
        setErrorText("Names cannot be shorter than 2 letters");
        setFirstNameError(true);
        setAnimate(false);
      } else if (!/^[a-zA-Z]+$/.test(firstName)) {
        setErrorText("Your first name must only contain letters");
        setFirstNameError(true);
        setAnimate(false);
      } else {
        setFirstNameError(false);
        if (lastName.length <= 2) {
          setErrorText("Names cannot be shorter than 2 letters");
          setLastNameError(true);
          setAnimate(false);
        } else if (!/^[a-zA-Z]+$/.test(lastName)) {
          setErrorText("Your first name must only contain letters");
          setLastNameError(true);
          setAnimate(false);
        } else {
          setLastNameError(false);
          validateNhsNumber(nhsNo);
          if (!niRe.test(niNo)) {
            setErrorText("This is not a valid NI number");
            setNiError(true);
            setAnimate(false);
          } else {
            setNiError(false);
            if (!/^\d+$/.test(mobileNo)) {
              setErrorText("Your mobile number can only contain digits");
              setMobileError(true);
              setAnimate(false);
            }
            else if (!/^\d{11}$/.test(mobileNo)) {
              setErrorText("Your mobile number must be 11 digits exactly");
              setMobileError(true);
              setAnimate(false);
            } else {
              setMobileError(false);
              navigation.navigate("Register-3", {
                userObj,
              });
            }
          }
        }
      }
    }
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
            label="Email Address (Required)"
            mode="outlined"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            error={emailError}
            onChangeText={(email) => setEmail(email)}
          />
          <HelperText type="error" visible={emailError}>
            {errorText}
          </HelperText>
          <TextInput
            label="First Name (Required)"
            mode="outlined"
            style={styles.input}
            autoCapitalize="characters"
            autoCorrect={false}
            value={firstName}
            error={firstNameError}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <HelperText type="error" visible={firstNameError}>
            {errorText}
          </HelperText>
          <TextInput
            label="Last Name (Required)"
            mode="outlined"
            style={styles.input}
            autoCapitalize="characters"
            autoCorrect={false}
            value={lastName}
            error={lastNameError}
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <HelperText type="error" visible={lastNameError}>
            {errorText}
          </HelperText>
          <TextInput
            label="NHS Number (Optional)"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={nhsNo}
            error={nhsError}
            onChangeText={(nhsNo) => setNhsNo(nhsNo)}
          />
          <HelperText type="error" visible={nhsError}>
            {errorText}
          </HelperText>
          <TextInput
            label="NI Number (Required)"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={niNo}
            error={niError}
            onChangeText={(niNo) => setNiNo(niNo)}
          />
          <HelperText type="error" visible={niError}>
            {errorText}
          </HelperText>
          <TextInput
            label="Mobile Number (Required)"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={mobileNo}
            error={mobileError}
            onChangeText={(mobileNo) => setMobileNo(mobileNo)}
          />
          <HelperText type="error" visible={mobileError}>
            {errorText}
          </HelperText>
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
            animating={animate}
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
