import React from "react";
import { View } from "react-native";
import { Headline, Card } from "react-native-paper";
import { Styles } from "./style";

export default function Symptoms() {
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Current status" />
        <Card.Content style={Styles.cardContent}>
          <Headline>No symptoms yet</Headline>
        </Card.Content>
      </Card>
    </View>
  );
}
