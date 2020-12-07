import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Styles } from "../Styles/SymptomStyle";
import SymptomForm from "../Components/Symptoms/SymptomForm/SymptomForm";
import SymptomFormText from "../Components/Symptoms/SymptomFormText/SymptomText";
import SymptomService from "../Services/SymptomService";
import { UserContext } from "../Hooks/UserContext";
import UserService from "../Services/UserService";
import { StatusBar } from "expo-status-bar";

export default function SymptomLog({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const [cards, setCards] = useState();
  const [value, setValue] = useState("");
  const [values, setValues] = useState({});
  const [comment, setComment] = useState("");

  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (values, comment) => {
    let symptoms = [];
    for (let key in values) {
      if (values[key] == "true") {
        symptoms.push({ name: key, comment: "" });
      }
    }
    symptoms.push({ name: "comment", comment: comment });
    let body = { symptoms: symptoms };
    let res = await UserService.updateSymptoms(user.username, body);
    console.log(res);
    setUser(res);
    navigation.goBack();
  };
  const handleTextInput = (comment) => {
    setComment(comment);
  };
  const handleInput = (symptomName, value) => {
    setValue(value);
    setValues((values) => ({ ...values, [symptomName]: value }));
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
      <StatusBar style="dark" />
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
