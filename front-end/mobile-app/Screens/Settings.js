import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import { List, Button, Card, Title, Avatar } from "react-native-paper";
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";

export default function Settings({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const labelTag = user.firstName.substring(0,1) + user.lastName.substring(0,1)
  const logOut = async (user) => {
    setUser(null);
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Avatar.Text style={styles.avatar} size={72} label={labelTag} />
        <Title style={styles.title}>
          {user.firstName + " " + user.lastName}
        </Title>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <List.Item
              title="Edit Profile"
              description="Edit your profile information here"
              left={(props) => (
                <List.Icon {...props} icon="account-circle-outline" />
              )}
              onPress={() => navigation.navigate("EditProfile")}
            />
            <List.Item
              title="Account Settings"
              description="Remove your account here"
              left={(props) => <List.Icon {...props} icon="settings" />}
              onPress={() => navigation.navigate("AccountSettings")}
            />
          </Card.Content>
        </Card>
      </ScrollView>
      <Button onPress={() => logOut(user)}>Log Out</Button>
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
