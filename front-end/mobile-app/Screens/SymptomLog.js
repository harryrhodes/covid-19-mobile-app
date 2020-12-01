import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Styles } from "../Styles/SymptomStyle";
import SymptomForm from "../Components/Symptoms/SymptomForm/SymptomForm";
import SymptomFormText from "../Components/Symptoms/SymptomFormText/SymptomText";
import SymptomService from "../Services/SymptomService";

export default function SymptomLog() {
  const [cards, setCards] = useState();
  const [value, setValue] = useState(false);
  const [values, setValues] = useState({});

  const [errorText, setErrorText] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (values) => {
    let body = []
    for (let i = 0; i < values.length; i++ ) {
      console.log(values[i])
    }
    //let res = await UserService.update(userObj);
  }

  const handleInput = (symptomName, value) => {
    setValue(value);
    setValues((values) => ({
      ...values,
      [symptomName]: value,
    }));
    console.log(values);
  };

  const renderCards = async () => {
    let res = await SymptomService.getAll();
    let symptoms = res.data;
    let cards = [];
    for (let i = 0; i < symptoms.length; i++) {
      cards.push(
        <SymptomForm
          key={symptoms[i]._id}
          text={"Have you experienced: " + symptoms[i].name}
          value={value}
          name={symptoms[i].name}
          onChange={handleInput}
          error={error}
          errorText={errorText}
        />
      );
    }
    setCards(cards);
  };
  useEffect(() => {
    if (!cards) {
      renderCards();
    }
  });

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {cards}

        <SymptomFormText
          key={"comment"}
          text={"Have you experienced any additional symptoms? (eg stress)"}
          value={value}
          name={"comments"}
          onChange={handleInput}
        />

        <Button
          onPress={(values) => handleSubmit(values)}
          mode="contained"
          style={Styles.loginButton}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
