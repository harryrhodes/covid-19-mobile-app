import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Card, Button } from "react-native-paper";
import {WebView} from "react-native-webview"
import { Styles } from "./style";

export default function BookTestCard() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Book A Test" />
        <Card.Content style={Styles.cardContent}>
          <Button mode="contained">
            Book a test now
          </Button>
        </Card.Content>
        <Card.Title title="Did you book a test?" />
        <Card.Content style={Styles.cardContent}>
          <Button mode="contained">
            Yes
          </Button>
          <Button mode="contained">
            No
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
