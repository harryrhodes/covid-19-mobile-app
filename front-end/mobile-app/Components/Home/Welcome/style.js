import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    fullWidthView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      },
      welcome: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "nowrap",
        padding: "1rem",
      },
})

export {Styles}