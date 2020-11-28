import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  Subheading,
  ActivityIndicator,
  Avatar,
} from "react-native-paper";
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";

export default function EditProfile({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nhsNo, setNhsNo] = useState("");
  const [niNo, setNiNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");

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
    let res = await UserService.update(userObj);
    setUser(res);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Avatar.Text style={styles.avatar} size={72} label="HR" />
        <Title style={styles.title}>Edit Profile</Title>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Subheading>Personal Details</Subheading>
            <TextInput
              label="Email Address"
              placeholder={user.email}
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
              placeholder={user.firstName}
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
              placeholder={user.lastName}
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
              placeholder={user.nhsNo}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
              value={nhsNo}
              error={false}
              onChangeText={(nhsNo) => setNhsNo(nhsNo)}
            />
            <TextInput
              label="NI Number"
              placeholder={user.niNo}
              mode="outlined"
              style={styles.input}
              keyboardType="numeric"
              value={niNo}
              error={false}
              onChangeText={(niNo) => setNiNo(niNo)}
            />
            <TextInput
              label="Mobile Number"
              placeholder={user.mobileNo}
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
              Update Profile
            </Button>
            <ActivityIndicator
              animating={false}
              style={styles.activityIndicator}
            />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Subheading>Address</Subheading>
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
              Update Address
            </Button>
            <ActivityIndicator
              animating={false}
              style={styles.activityIndicator}
            />
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
