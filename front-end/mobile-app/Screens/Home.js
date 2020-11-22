import React from "react";
import {SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../Styles/HomeStyle"
import SymptomsCard from "../Components/Home/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/Home/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/Home/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/Home/Welcome/Welcome";

export default function Home() {
  return (
    <SafeAreaView style={Styles.container}>
      <Welcome text={'Welcome, Harry'}/>
      <SymptomsCard />
      <BookTestCard />
      <LogSymptomsCard />
      <Button>Log Out</Button>
    </SafeAreaView>
  );
}
