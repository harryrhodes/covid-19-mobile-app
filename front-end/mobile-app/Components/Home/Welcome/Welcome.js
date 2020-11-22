import React from "react";
import { View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { Styles } from "./style";

export default function Welcome(props) {
  return (
    <View style={Styles.fullWidthView}>
      <View style={Styles.welcome}>
        <Headline>{props.text}</Headline>
        <Subheading>{props.subhead}</Subheading>
      </View>
    </View>
  );
}
