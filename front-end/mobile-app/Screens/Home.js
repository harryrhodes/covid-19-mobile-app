import React from "react";
import {SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../Styles/HomeStyle"
import SymptomsCard from "../Components/HomeScreen/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/HomeScreen/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/HomeScreen/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/HomeScreen/BookTestCard/BookTestCard";

export default function Home() {
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
