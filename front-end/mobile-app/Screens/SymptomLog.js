import React from "react";
import {SafeAreaView} from "react-native";
import {Styles} from "../Styles/HomeStyle"
import SymptomForm from "../Components/Symptoms/SymptomForm/SymptomForm"

export default function SymptomLog() {
  return (
    <SafeAreaView style={Styles.container}>
      <SymptomForm />
    </SafeAreaView>
  );
}
