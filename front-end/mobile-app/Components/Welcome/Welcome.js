import React from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";
import { Styles } from "./style";

export default function Welcome(props) {
  return (
    <View style={Styles.fullWidthView}>
      <View style={Styles.welcome}>
        <Headline>Welcome, {props.name}</Headline>
      </View>
    </View>
  );
}
