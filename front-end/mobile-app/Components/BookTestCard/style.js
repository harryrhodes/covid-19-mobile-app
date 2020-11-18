import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fullWidthView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
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

export { Styles };
