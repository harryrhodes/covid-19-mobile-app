import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ProgressBar,
  ActivityIndicator,
  HelperText,
  RadioButton,
  Text,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function Register({ navigation, route }) {
  //const [temperature, setTemperature] = useState("");
  const [nop, setNop] = useState();
  const [publicTransport, setPublicTransport] = useState();
  const [hospitalisations, setHospitalisations] = useState();
  const [diabetes, setDiabetes] = useState();
  const [hypertension, setHypertension] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();

  const [status] = useState("Not Tested");

  const [errorText, setErrorText] = useState("");
  const [dobError, setDobError] = useState(false);

  const [animate, setAnimate] = useState(false);

  const dobReg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  const validateInputs = async (
    nop,
    publicTransport,
    hospitalisations,
    diabetes,
    hypertension,
    dob,
    gender,
    status,
    userObj
  ) => {
    userObj.patientDetails = {
      ...userObj.patientDetails,
      nop: nop,
      publicTransport: publicTransport,
      hospitalisations: hospitalisations,
      diabetes: diabetes,
      hypertension: hypertension,
      dob: dob,
      gender: gender,
      status: status,
    };
    console.log(userObj);
    if (dob == "") {
      setErrorText("This is a required field");
      setDobError(true);
      setAnimate(false);
    } else {
      if (!dobReg.test(dob)) {
        setErrorText("This is not a valid DoB, enter DD/MM/YYYY");
        setDobError(true);
        setAnimate(false);
      } else {
        setDobError(false);
        navigation.navigate("Register-4", {
          userObj,
        });
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Title style={styles.appTitle}>Register</Title>
          <ProgressBar style={styles.progressBar} progress={0.75} />
        </View>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.Text}>
              PLEASE LOOK OVER THIS SECTION CAREFULLY
            </Text>
            <Text style={styles.Text}>You cannot change these later!</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Title
              title={"How many people do you live with?"}
              titleNumberOfLines={3}
            />
            <RadioButton.Group // number of people
              onValueChange={(newNop) => setNop(newNop)}
              value={nop}
            >
              <RadioButton.Item label="I live alone" value="0" />
              <RadioButton.Item label="1 Person" value="1" />
              <RadioButton.Item label="2 People" value="2" />
              <RadioButton.Item label="3 People" value="3" />
              <RadioButton.Item label="4 People" value="4" />
              <RadioButton.Item label="More Than 4 People" value="4+" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Title
              title={"Do you taken public transport often?"}
              titleNumberOfLines={3}
            />
            <RadioButton.Group
              onValueChange={(newPublicTransport) =>
                setPublicTransport(newPublicTransport)
              }
              value={publicTransport}
            >
              <RadioButton.Item label="Yes" value="true" />
              <RadioButton.Item label="No" value="false" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Title
              title={
                "How many times have you been hospitalised for any reason?"
              }
              titleNumberOfLines={3}
            />
            <RadioButton.Group
              onValueChange={(newHospitalisations) =>
                setHospitalisations(newHospitalisations)
              }
              value={hospitalisations}
            >
              <RadioButton.Item
                label="I have not been hospitalised before"
                value="0"
              />
              <RadioButton.Item label="1 time" value="1" />
              <RadioButton.Item label="2 times" value="2" />
              <RadioButton.Item label="3 times" value="3" />
              <RadioButton.Item label="4 times" value="4" />
              <RadioButton.Item label="5 times" value="5" />
              <RadioButton.Item label="More Than 5 Times" value="5+" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Title title={"Are You Diabetic?"} titleNumberOfLines={3} />
            <RadioButton.Group // Diabetes
              onValueChange={(newDiabetes) => setDiabetes(newDiabetes)}
              value={diabetes}
            >
              <RadioButton.Item label="I don't have diabetes" value="no" />
              <RadioButton.Item label="I Have Type 1 Diabetes" value="type1" />
              <RadioButton.Item label="I Have Type 2 Diabetes" value="type2" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Title
              title={"Do you suffer from hypertension?"}
              titleNumberOfLines={3}
            />
            <RadioButton.Group // Diabetes
              onValueChange={(newHypertension) =>
                setHypertension(newHypertension)
              }
              value={hypertension}
            >
              <RadioButton.Item
                label="I don't have hypertension"
                value="false"
              />
              <RadioButton.Item label="I have hypertension" value="true" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <TextInput
              label="Date of Birth (DD/MM/YYYY)"
              mode="outlined"
              style={styles.input}
              value={dob}
              error={dobError}
              onChangeText={(dob) => setDob(dob)}
            />
            <HelperText type="error" visible={dobError}>
              {errorText}
            </HelperText>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Title title={"What Is Your Gender?"} titleNumberOfLines={3} />
            <RadioButton.Group
              onValueChange={(newGender) => setGender(newGender)}
              value={gender}
            >
              <RadioButton.Item label="Male" value="Male" />
              <RadioButton.Item label="Female" value="Female" />
              <RadioButton.Item label="Unspecified" value="Unspecified" />
            </RadioButton.Group>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Button
              mode="contained"
              style={styles.continueButton}
              onPress={() =>
                validateInputs(
                  nop,
                  publicTransport,
                  hospitalisations,
                  diabetes,
                  hypertension,
                  dob,
                  gender,
                  status,
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
  Text: {
    textAlign: "center",
  },
});
