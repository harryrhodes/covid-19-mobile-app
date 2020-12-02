import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Card, Button } from "react-native-paper";
import { Styles } from "./style";
import { UserContext } from "../../../Hooks/UserContext";
import UserService from "../../../Services/UserService";

export default function TestResultCard() {
  const [opened, setOpened] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleFeeback = async (positive) => {
    if (positive == true) {
      user.patientDetails.personalInfo.status = "Positive";
      let res = await UserService.update(user.username, {
        patientDetails: user.patientDetails,
      });
      setUser(res);
    } else {
      user.patientDetails.personalInfo.status = "Negative";
      let res = await UserService.update(user.username, {
        patientDetails: user.patientDetails,
      });
      setUser(res);
    }
  };
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Have you Received Your Test Result?" />
        {opened == false ? (
          <Card.Content style={Styles.cardContent}>
            <Button mode="contained" onPress={setOpened(true)}>
              Confirm Test Result
            </Button>
          </Card.Content>
        ) : (
          <Card.Content style={Styles.cardContent}>
            <Button mode="contained" onPress={() => handleFeeback(true)}>
              Positive
            </Button>
            <Button mode="outlined" onPress={() => handleFeeback(false)}>
              Negative
            </Button>
          </Card.Content>
        )}
      </Card>
    </View>
  );
}
