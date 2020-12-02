import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Card, Chip } from "react-native-paper";
import { Styles } from "./style";
import { UserContext } from "../../../Hooks/UserContext";

export default function StatusCard() {
  const { user, setUser } = useContext(UserContext);
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Current status" />
        <Card.Content style={Styles.cardContent}>
          <Chip icon="information">
            {user.patientDetails.personalInfo.status}
          </Chip>
        </Card.Content>
      </Card>
    </View>
  );
}
