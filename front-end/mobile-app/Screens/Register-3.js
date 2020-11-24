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
  // const [county, setUsernameError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [animate, setAnimate] = useState(false);
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
    let res = await UserService.register(userObj);
    console.log(res);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={styles.appTitle}>Register</Title>
        <ProgressBar style={styles.progressBar} progress={0.8} />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <TextInput
            label="Address 1"
            mode="outlined"
            style={styles.input}
            value={address1}
            onChangeText={(address1) => setAddress1(address1)}
          />
          <TextInput
            label="Address 2"
            mode="outlined"
            style={styles.input}
            value={address2}
            onChangeText={(address2) => setAddress2(address2)}
          />
          <TextInput
            label="Address 3"
            mode="outlined"
            style={styles.input}
            value={address3}
            onChangeText={(address3) => setAddress3(address3)}
          />
          <TextInput
            label="City"
            mode="outlined"
            style={styles.input}
            value={county}
            onChangeText={(county) => setCounty(county)}
          />
          <TextInput
            label="County"
            mode="outlined"
            style={styles.input}
            value={city}
            onChangeText={(city) => setCity(city)}
          />
          <TextInput
            label="Postcode"
            mode="outlined"
            style={styles.input}
            value={postcode}
            onChangeText={(postcode) => setPostcode(postcode)}
          />
          <TextInput
            label="Country"
            mode="outlined"
            style={styles.input}
            value={country}
            onChangeText={(country) => setCountry(country)}
          />

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
