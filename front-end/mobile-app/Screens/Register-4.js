import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ProgressBar,
  ActivityIndicator,
  HelperText,
  Text,
} from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";

export default function Register({ navigation, route }) {
  const { user, setUser } = useContext(UserContext);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");

  const [address1Error, setAddress1Error] = useState(false);
  const [address2Error, setAddress2Error] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [animate, setAnimate] = useState(false);
  const validateInputs = async (
    address1,
    address2,
    address3,
    city,
    county,
    postcode,
    country,
    userObj
  ) => {
    userObj.patientDetails.address = {
      address1: address1,
      address2: address2,
      address3: address3,
      city: city,
      county: county,
      postcode: postcode,
      country: country,
    };
    if (address1 == "") {
      setErrorText("This field is required");
      setAddress1Error(true);
      setAnimate(false);
    } else {
      setAddress1Error(false);
      if (address2 == "") {
        setErrorText("This field is required");
        setAddress2Error(true);
        setAnimate(false);
      } else {
        setAddress2Error(false);
        if (city == "") {
          setErrorText("This field is required");
          setCityError(true);
          setAnimate(false);
        } else {
          setCityError(false);
          if (postcode == "") {
            setErrorText("This field is required");
            setPostcodeError(true);
            setAnimate(false);
          } else {
            setPostcodeError(false);
            if (country == "") {
              setErrorText("This field is required");
              setCountryError(true);
              setAnimate(false);
            } else {
              setCountryError(false);
              let res = await UserService.register(userObj);
              setUser(res);
            }
          }
        }
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <Title style={styles.appTitle}>Register</Title>
        <ProgressBar style={styles.progressBar} progress={1} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
        <Text style={styles.Text}>All fields marked Required cannot be left blank.</Text>
          <TextInput
            label="Address 1 (Required)"
            mode="outlined"
            style={styles.input}
            value={address1}
            error={address1Error}
            onChangeText={(address1) => setAddress1(address1)}
          />
          <HelperText type="error" visible={address1Error}>
            {errorText}
          </HelperText>
          <TextInput
            label="Address 2 (Required)"
            mode="outlined"
            style={styles.input}
            value={address2}
            error={address2Error}
            onChangeText={(address2) => setAddress2(address2)}
          />
          <HelperText type="error" visible={address2Error}>
            {errorText}
          </HelperText>
          <TextInput
            label="Address 3 (Optional)"
            mode="outlined"
            style={styles.input}
            value={address3}
            onChangeText={(address3) => setAddress3(address3)}
          />
          <TextInput
            label="City (Required)"
            mode="outlined"
            style={styles.input}
            value={city}
            error={cityError}
            onChangeText={(city) => setCity(city)}
          />
          <HelperText type="error" visible={cityError}>
            {errorText}
          </HelperText>
          <TextInput
            label="County (Optional)"
            mode="outlined"
            style={styles.input}
            value={county}
            onChangeText={(county) => setCounty(county)}
          />
          <TextInput
            label="Postcode (Required)"
            mode="outlined"
            style={styles.input}
            value={postcode}
            error={postcodeError}
            onChangeText={(postcode) => setPostcode(postcode)}
          />
          <HelperText type="error" visible={postcodeError}>
            {errorText}
          </HelperText>
          <TextInput
            label="Country (Required)"
            mode="outlined"
            style={styles.input}
            value={country}
            error={countryError}
            onChangeText={(country) => setCountry(country)}
          />
          <HelperText type="error" visible={countryError}>
            {errorText}
          </HelperText>

          <Button
            style={styles.registerButton}
            mode="contained"
            onPress={() =>
              validateInputs(
                address1,
                address2,
                address3,
                city,
                county,
                postcode,
                country,
                route.params.userObj
              )
            }
          >
            Register
          </Button>
          <ActivityIndicator
            animating={animate}
            style={styles.activityIndicator}
          />
        </Card.Content>
      </Card>
      </ScrollView>
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
