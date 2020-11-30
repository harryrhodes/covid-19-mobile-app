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
  HelperText
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
  const [errorText, setErrorText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [nhsError, setNhsError] = useState(false);
  const [niError, setNiError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");

  const [animate, setAnimate] = useState(false);

  const labelTag =
    user.firstName.substring(0, 1) + user.lastName.substring(0, 1);

  const validateProfile = async (
    newEmail,
    newFirstName,
    newLastName,
    newNhsNo,
    newNiNo,
    newMobileNo
  ) => {
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const niRe = /^(?!BG|GB|NK|KN|TN|NT|ZZ)[ABCEGHJ-PRSTW-Z][ABCEGHJ-NPRSTW-Z]\s*\d{2}\s*\d{2}\s*\d{2}\s*[A-D]$/;

    let secondEmail = ""
    let secondFirstName = ""
    let secondLastName = ""
    let secondNhsNo = ""
    let secondNiNo = ""
    let secondMobileNo = ""

    if (!email == "") {
      if (!emailRe.test(email)) {
        setErrorText("Please enter a valid email");
        setEmailError(true);
        setAnimate(false);
      } else {
        setEmailError(false);
        secondEmail = newEmail;
      }
    } else {
      setEmailError(false);
      secondEmail = user.email;
    }

    if (!firstName == "") {
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
        secondFirstName = newFirstName;
      }
    } else {
      setFirstNameError(false);
      secondFirstName = user.firstName;
    }

    if (!lastName == "") {
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
        secondLastName = newLastName;
      }
    } else {
      setLastNameError(false);
      secondLastName = user.lastName;
    }

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
        secondNhsNo = newNhsNo
      }
    } else {
      setNhsError(false);
      secondNhsNo = user.nhsNo
    }

    if (!niNo == "") {
      if (!niRe.test(niNo)) {
        setErrorText("This is not a valid NI number");
        setNiError(true);
        setAnimate(false);
      } else {
        setNiError(false);
        secondNiNo = newNiNo;
      }
    } else {
      setNiError(false);
      secondNiNo = user.niNo;
    }

    if (!mobileNo == "") {
      if (!/^\d+$/.test(mobileNo)) {
        setErrorText("Your mobile number can only contain digits");
        setMobileError(true);
        setAnimate(false);
      } else if (!/^\d{11}$/.test(mobileNo)) {
        setErrorText("Your mobile number must be 11 digits exactly");
        setMobileError(true);
        setAnimate(false);
      } else {
        setMobileError(false);
        secondMobileNo = newMobileNo;
      }
    } else {
      setMobileError(false);
      secondMobileNo = user.mobileNo;
    }

    let body = {
      password: "",
      email: secondEmail,
      firstName: secondFirstName,
      lastName: secondLastName,
      role: {},
      patientDetails: {
        nhsNo: secondNhsNo,
        niNo: secondNiNo,
        mobileNo: secondMobileNo,
      },
    };
    let profRes = await UserService.update(user.username, body);
    setUser(profRes);
  };

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
    // userObj.patientDetails.address = {
    //   address1: address1,
    //   address2: address2,
    //   address3: address3,
    //   city: city,
    //   county: county,
    //   postcode: postcode,
    //   country: country,
    // };
    let res = await UserService.update(userObj);
    setUser(res);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Avatar.Text style={styles.avatar} size={72} label={labelTag} />
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
              error={emailError}
              onChangeText={(email) => setEmail(email)}
            />
            <HelperText type="error" visible={emailError}>
              {errorText}
            </HelperText>
            <TextInput
              label="First Name"
              placeholder={user.firstName}
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
              label="Last Name"
              placeholder={user.lastName}
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
              label="NHS Number"
              placeholder={user.nhsNo}
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
              label="NI Number"
              placeholder={user.niNo}
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
              label="Mobile Number"
              placeholder={user.mobileNo}
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
                validateProfile(
                  email,
                  firstName,
                  lastName,
                  nhsNo,
                  niNo,
                  mobileNo,
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
