import React, { useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Card, RadioButton } from "react-native-paper";
import { Styles } from "./style";

export default function SymptomForm(props) {
  const [value, setValue] = useState(false);

  function updateValue(value) {
    props.onChange(props.name, value)
    setValue(value)
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
            <RadioButton.Item label="Yes" value={true} onPress={updateValue}/>
            <RadioButton.Item label="No" value={false} />
          </RadioButton.Group>
          <ActivityIndicator
            animating={false}
            style={Styles.activityIndicator}
          />
        </Card.Content>
      </Card>
    </View>
  );
}
