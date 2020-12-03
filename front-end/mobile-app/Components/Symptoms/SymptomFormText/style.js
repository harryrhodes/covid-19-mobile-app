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
    marginTop: 20,
    marginBottom: 20,
    //boxShadow: "5px 5px 20px #888888",
    borderRadius: 15,
  },
  cardContent: {
    margin: "1rem",
  },
});

export { Styles };
