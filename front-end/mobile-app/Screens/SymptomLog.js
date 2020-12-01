import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Styles } from "../Styles/SymptomStyle";
import SymptomForm from "../Components/Symptoms/SymptomForm/SymptomForm";
import SymptomFormText from "../Components/Symptoms/SymptomFormText/SymptomText";
import SymptomService from "../Services/SymptomService";
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";

export default function SymptomLog() {
  const { user, setUser } = useContext(UserContext);
  const [cards, setCards] = useState();
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);
  const [comment, setComment] = useState("");

  const [errorText, setErrorText] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (values, comment) => {
    values.push({["comment"]: comment})
    let body = {symptoms: values}
    let res = await UserService.updateSymptoms(user.username, JSON.stringify(body));
    console.log(res);
    setUser(res);
  }
  const handleTextInput = (comment) => {
    setComment(comment);
  }
  const handleInput = (symptomName, value) => {
    setValue(value);
    let newElement = {[symptomName]: value};
    setValues((values) => ([...values,newElement]));
  }
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
      <ScrollView keyboardShouldPersistTaps="handled">
        {cards}
        <SymptomFormText
          key={"comment"}
          text={"Have you experienced any additional symptoms? (eg stress)"}
          value={comment}
          name={"Comment"}
          onChangeText={handleTextInput}
        />
        <Button
          onPress={() => handleSubmit(values, comment)}
          mode="contained"
          style={Styles.loginButton}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
