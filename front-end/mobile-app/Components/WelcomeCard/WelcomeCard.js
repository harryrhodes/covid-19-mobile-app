import React from "react";
import { View } from "react-native";
import { Headline, Card, Avatar } from "react-native-paper";
import { Styles } from "./style";

export default function WelcomeCard() {
  return (
    <View style={Styles.halfWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Welcome Harry" />
        <Card.Content style={Styles.cardContent}>
          <Avatar.Text size={64} label="HR" />
        </Card.Content>
      </Card>
      <Card style={Styles.card}>
        <Card.Content style={Styles.cardContent}>
          <Headline>Current Status</Headline>
        </Card.Content>
      </Card>
    </View>
  );
}
