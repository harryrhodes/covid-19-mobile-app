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
        marginTop: "1rem",
        marginBottom: "1rem",
        //boxShadow: "5px 5px 20px #888888",
        //borderRadius: "15px",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
      },
      cardContent: {
        margin: "1rem",
        flexDirection: "row",
        justifyContent: "center",
      },
})

export {Styles}