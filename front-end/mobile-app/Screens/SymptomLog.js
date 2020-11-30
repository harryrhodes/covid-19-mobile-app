import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Styles } from "../Styles/SymptomStyle";
import SymptomForm from "../Components/Symptoms/SymptomForm/SymptomForm";
import Welcome from "../Components/Home/Welcome/Welcome";
import SymptomService from "../Services/SymptomService";

export default function SymptomLog() {
  const [cards, setCards] = useState();
  const [value, setValue] = useState(false);
  const [values, setValues] = useState({});

  const handleInput = (symptomName, value) => {
    setValue(value);
    setValues((values) => ({
      ...values,
      [symptomName]: value,
    }))
  }
  const renderCards = async () => {
    let res = await SymptomService.getAll();
    let symptoms = res.data;
    let cards = [];
    for (let i=0; i < symptoms.length; i++){
      cards.push(
        <SymptomForm
          key={symptoms[i]._id}
          text={"Have you experienced: "+symptoms[i].name}
          value={value}
          name={symptoms[i].name}
          onChange={handleInput}
        />
      )
    } 
    setCards(cards); 
  }
  useEffect(() => {
    if (!cards){
      renderCards();
    }
  });

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Welcome text={"Most Common Symptoms"}/>
        {cards}
        <Button
          onPress={() => console.log(values)}
          mode="contained"
          style={Styles.loginButton}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
