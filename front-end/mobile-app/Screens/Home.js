import React, {useContext } from "react";
import {SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../Styles/HomeStyle"
import SymptomsCard from "../Components/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/Welcome/Welcome";
import { UserContext } from "../Hooks/UserContext";

export default function Home({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const logOut = async (user) => {
    setUser(null);
    navigation.goBack();
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Welcome firstName={user.firstName}/>
      <SymptomsCard />
      <BookTestCard />
      <LogSymptomsCard />
      <Button onPress={() => logOut(user)} >Log Out</Button>
    </SafeAreaView>
  );
}
