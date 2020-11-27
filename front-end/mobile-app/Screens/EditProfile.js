import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  ActivityIndicator,
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title style={styles.title}>Edit Profile</Title>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
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
      </ScrollView>
      <Button onPress={() => navigation.navigate("Register-1")}>Log Out</Button>
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
