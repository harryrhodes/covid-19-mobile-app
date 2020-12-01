import React, { useState } from "react";
import { View } from "react-native";
import { Card, RadioButton, HelperText } from "react-native-paper";
import { Styles } from "./style";

export default function SymptomForm(props) {
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState("")
  const [error, setError] = useState(false)

  function updateValue(value) {
    props.onChange(props.name, value)
    if (value == "") {
      setErrorText("Please select an answer")
      setError(true)
    } else {
      setValue(value)
    }
  }

  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title={props.text} titleNumberOfLines={3} />
        <Card.Content style={Styles.cardContent}>
          <RadioButton.Group
            onValueChange={updateValue}
            value={value}
          >
            <RadioButton.Item label="Yes" value="true" onPress={updateValue}/>
            <RadioButton.Item label="No" value="false" />
          </RadioButton.Group>
          <HelperText type="error" visible={props.error}>
            {props.errorText}
          </HelperText>
        </Card.Content>
      </Card>
    </View>
  );
}