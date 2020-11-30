import React from "react";
import { View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { Styles } from "./style";

export default function Welcome({ firstName }) {
  return (
    <View style={Styles.fullWidthView}>
      <View style={Styles.welcome}>
        <Headline>Welcome, {firstName}</Headline>
      </View>
    </View>
  );
}
