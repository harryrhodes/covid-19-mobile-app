import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import {
  Headline,
  Button,
  Card,
  Avatar,
  ActivityIndicator,
} from "react-native-paper";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.halfWidthView}>
        <Card style={styles.card}>
          <Card.Title title="Welcome Harry" />
          <Card.Content style={styles.cardContent}>
            <Avatar.Text size={64} label="HR" />
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Headline>Current Status</Headline>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.fullWidthView}>
        <Card style={styles.card}>
          <Card.Title title="Book A Test" />
          <Card.Content style={styles.cardContent}>
            <Button mode="contained" style={styles.loginButton}>
              Book a test now
            </Button>
            <ActivityIndicator
              animating={false}
              style={styles.activityIndicator}
            />
          </Card.Content>
        </Card>
      </View>
      <View style={styles.fullWidthView}>
        <Card style={styles.card}>
          <Card.Title title="Log Symptoms" />
          <Card.Content style={styles.cardContent}>
            <Button mode="contained" style={styles.loginButton}>
              Log Now
            </Button>
            <ActivityIndicator
              animating={false}
              style={styles.activityIndicator}
            />
          </Card.Content>
        </Card>
      </View>
      <Button>Log Out</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  fullWidthView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  halfWidthView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
  card: {
    position: "relative",
    width: "100%",
    margin: 20,
  },
  cardContent: {
    margin: 15,
  },
});
