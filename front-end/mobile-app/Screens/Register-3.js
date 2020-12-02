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
  RadioButton,
  Text,
} from "react-native-paper";

export default function Register({ navigation, route }) {
  //const [temperature, setTemperature] = useState("");
  const [nop, setNop] = useState("1");
  const [publicTransport, setPublicTransport] = useState("false");
  const [hospitalisations, setHospitalisations] = useState("0");
  const [diabetes, setDiabetes] = useState("no diabetes");
  const [hypertension, setHypertension] = useState("false");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Unspecified");
  const [status] = useState("Not Tested");

  const [errorText, setErrorText] = useState("");
  //const [temperatureError, setTemperatureError] = useState(false);
  const [dobError, setDobError] = useState(false);

  const [animate, setAnimate] = useState(false);

  const dobReg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  const validateInputs = async (
    //temperature,
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
    userObj.patientDetails.personalInfo = {
      //temperature: temperature,
      nop: nop,
      publicTransport: publicTransport,
      hospitalisations: hospitalisations,
      diabetes: diabetes,
      hypertension: hypertension,
      dob: dob,
      gender: gender,
      status: status,
    };

    // if (temperature == "") {
    //   setErrorText("This is a required field");
    //   setTemperatureError(true);
    //   setAnimate(false);
    // } else {
    //   if (!/^\d+$/.test(temperature)) {
    //     setErrorText(
    //       "Your Temperature can only contain digits. Please round it to a whole number"
    //     );
    //     setTemperatureError(true);
    //     setAnimate(false);
    //   } else if (!/^\d{2}$/.test(temperature)) {
    //     setErrorText("Your temperature must be 2 digits exactly");
    //     setTemperatureError(true);
    //     setAnimate(false);
    //   } else {
    //     setTemperatureError(false);
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
      //}
    //}
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={styles.appTitle}>Register</Title>
        <ProgressBar style={styles.progressBar} progress={0.75} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
        <Text style={styles.Text}>PLEASE LOOK OVER THIS SECTION CAREFULLY</Text>
        <Text style={styles.Text}>You cannot change these later!</Text>
        </Card.Content>
      </Card>

      {/* <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <TextInput // Temperature Check
            label="Most Recent Temperature (°C)"
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
            value={temperature}
            error={temperatureError}
            onChangeText={(temperature) => setTemperature(temperature)}
          />
          <HelperText type="error" visible={temperatureError}>
            {errorText}
          </HelperText>
        </Card.Content>
      </Card> */}

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
            <RadioButton.Item label="I live alone" value="1" />
            <RadioButton.Item label="2 people" value="2" />
            <RadioButton.Item label="3 people" value="3" />
            <RadioButton.Item label="4 people" value="4" />
            <RadioButton.Item label="More than 4 people" value="4+" />
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
            title={"How many times have you been hospitalised for any reason?"}
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
            <RadioButton.Item label="More than 5 times" value="5+" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Card.Title title={"Do you have diabetes?"} titleNumberOfLines={3} />
          <RadioButton.Group // Diabetes
            onValueChange={(newDiabetes) => setDiabetes(newDiabetes)}
            value={diabetes}
          >
            <RadioButton.Item
              label="I don't have diabetes"
              value="no diabetes"
            />
            <RadioButton.Item label="I have type 1 diabetes" value="type1" />
            <RadioButton.Item label="I have type 2 diabetes" value="type2" />
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
            <RadioButton.Item label="I don't have hypertension" value="false" />
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
          <Card.Title title={"What is your gender?"} titleNumberOfLines={3} />
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
                //temperature,
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
