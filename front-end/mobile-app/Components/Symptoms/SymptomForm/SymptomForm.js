import React from "react";
import { View } from "react-native";
import { ActivityIndicator, Card, RadioButton } from "react-native-paper";
import { Styles } from "./style";

export default function BookTestCard() {
  const [value, setValue] = React.useState("first");

  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Do you have a sore throat?" />
        <Card.Content style={Styles.cardContent}>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
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
