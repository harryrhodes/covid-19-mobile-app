import React, { useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Styles } from "../Styles/HomeStyle";
import StatusCard from "../Components/Home/StatusCard/StatusCard";
import SymptomsCard from "../Components/Home/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/Home/BookTestCard/BookTestCard";
import TestResultCard from "../Components/Home/TestResultCard/TestResultCard";
import LogSymptomsCard from "../Components/Home/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/Home/Welcome/Welcome";
import { UserContext } from "../Hooks/UserContext";
import { StatusBar } from "expo-status-bar";

export default function Home({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const logOut = () => {
    setUser(null);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar style="dark" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Welcome firstName={user.firstName} />
        <StatusCard />
        <SymptomsCard />
        {user.patientDetails.status == "Awaiting Test Results" ? (
          <TestResultCard />
        ) : (
          <BookTestCard />
        )}
        <LogSymptomsCard logSymptoms={() => navigation.navigate("Symptoms")} />

        <Button onPress={() => logOut(user)}>Log Out</Button>
      </ScrollView>
    </SafeAreaView>
  );
}
