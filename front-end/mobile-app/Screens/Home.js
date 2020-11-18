import React from "react";
import {SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../Styles/HomeStyle"
import WelcomeCard from "../Components/WelcomeCard/WelcomeCard";
import BookTestCard from "../Components/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/LogSymptomsCard/LogSymptomsCard";

export default function Home() {
  return (
    <SafeAreaView style={Styles.container}>
      <WelcomeCard />
      <BookTestCard />
      <LogSymptomsCard />
      <Button>Log Out</Button>
    </SafeAreaView>
  );
}
