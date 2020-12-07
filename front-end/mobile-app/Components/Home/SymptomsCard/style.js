import {StyleSheet} from 'react-native'

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
        margin: 20,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
      },
      cardContent: {
        margin: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      },
})

export {Styles}