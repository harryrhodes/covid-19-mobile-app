import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  fullWidthView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    position: "relative",
    width: "90%",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  cardContent: {
    margin: "1rem",
  },
});

export { Styles };
