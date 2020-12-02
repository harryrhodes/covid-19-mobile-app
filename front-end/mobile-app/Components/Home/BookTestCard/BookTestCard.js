import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Subheading, Card, Button } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import { Styles } from "./style";
import { UserContext } from "../../../Hooks/UserContext";
import UserService from "../../../Services/UserService";

export default function BookTestCard() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://www.gov.uk/get-coronavirus-test"
    );
    if (result.type == "opened") {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };
  const handleFeeback = async (testBooked) => {
    if (testBooked == true) {
      user.patientDetails.status = "Awaiting Test Results";
      let res = await UserService.update(user.username, {
        patientDetails: user.patientDetails,
      });
      setUser(res);
    } else {
      setOpened(false);
    }
  };
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Book A Test" />
        {opened == false ? (
          <Card.Content style={Styles.cardContent}>
            <Button mode="contained" onPress={_handlePressButtonAsync}>
              Book a test now
            </Button>
          </Card.Content>
        ) : (
          <Card.Content style={Styles.cardContent}>
            <Subheading>Did you book a test?</Subheading>
            <Button mode="contained" onPress={() => handleFeeback(true)}>
              Yes
            </Button>
            <Button mode="outlined" onPress={() => handleFeeback(false)}>
              No
            </Button>
          </Card.Content>
        )}
      </Card>
    </View>
  );
}
