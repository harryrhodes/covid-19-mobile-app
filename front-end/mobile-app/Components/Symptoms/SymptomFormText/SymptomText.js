import React, { useState } from "react";
import { View } from "react-native";
import { Card, TextInput } from "react-native-paper";
import { Styles } from "./style";

export default function SymptomFormText(props) {
  const [value, setValue] = useState("");

  function updateValue(value) {
    props.onChange(props.name, value)
    setValue(value)
  }

  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title={props.text} titleNumberOfLines={3} />
        <Card.Content style={Styles.cardContent}>
          <TextInput 
            mode="outlined"
            value={value}
            error={false}
            onChangeText={updateValue}
          />
        </Card.Content>
      </Card>
    </View>
  );
}