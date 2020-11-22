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
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "nowrap",
        padding: "1rem",
      },
})

export {Styles}