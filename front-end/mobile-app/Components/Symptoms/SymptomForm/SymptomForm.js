import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Card, RadioButton } from "react-native-paper";
import { Styles } from "./style";

export default function SymptomForm(props) {
  const [value, setValue] = React.useState(false);

  function updateSelectedStateValue(value) {
    props.onChange(value)
    setValue(value)
  }

  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title={props.text} titleNumberOfLines={3}/>
        <Card.Content style={Styles.cardContent}>
          <RadioButton.Group
            onValueChange={updateSelectedStateValue}
            value={value}
          >
            <RadioButton.Item label="Yes" value='true' />
            <RadioButton.Item label="No" value='false' />
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
