import React from "react";
import { View } from "react-native";
import { Headline, Card } from "react-native-paper";
import { Styles } from "./style";

export default function Symptoms(props) {
  const setSymptoms = (props) => {
    console.log(props)
    if (!props.length) {
      return(<Headline>No current Symptoms!</Headline>)
    } else {
      return(<Headline>as of (symptoms.date) you had /list of symptoms/ please update your symptoms every x days</Headline>)
    }
  }
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Current status" />
        <Card.Content style={Styles.cardContent}>
          {setSymptoms(props)}
        </Card.Content>
      </Card>
    </View>
  );
}
