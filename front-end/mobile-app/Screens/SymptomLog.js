import React from "react";
import {SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../Styles/HomeStyle"
import SymptomsCard from "../Components/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/Welcome/Welcome";

export default function SymptomLog() {
  return (
    <SafeAreaView style={Styles.container}>
      <Welcome/>
      <SymptomsCard />
      <BookTestCard />
      <LogSymptomsCard />
      <Button>Log Out</Button>
    </SafeAreaView>
  );
}
