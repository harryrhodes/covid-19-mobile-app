import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Card, Button } from "react-native-paper";
import { Styles } from "./style";

export default function LogSymptomsCard() {
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Log Symptoms" />
        <Card.Content style={Styles.cardContent}>
          <Button mode="contained" style={Styles.loginButton}>
            Log Now
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
