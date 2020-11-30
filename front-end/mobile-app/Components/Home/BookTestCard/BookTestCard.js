import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Card, Button } from "react-native-paper";
import { Styles } from "./style";

export default function BookTestCard() {
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Book A Test" />
        <Card.Content style={Styles.cardContent}>
          <Button mode="contained" style={Styles.loginButton}>
            Book a test now
          </Button>
          <ActivityIndicator
            animating={false}
            style={Styles.activityIndicator}
          />
        </Card.Content>
      </Card>
    </View>
  );
}
