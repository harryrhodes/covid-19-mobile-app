import React, { useState } from "react";
import { View } from "react-native";
import { Subheading, Card, Button } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import { Styles } from "./style";

export default function BookTestCard() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

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
  const handleFeeback = (testBooked) => {
    if (testBooked == true) {
      console.log("Booked");
    } else {
      console.log("Cancel");
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
