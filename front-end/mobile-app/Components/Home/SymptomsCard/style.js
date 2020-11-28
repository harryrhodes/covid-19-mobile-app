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
<<<<<<< HEAD:front-end/mobile-app/Components/Home/SymptomsCard/style.js
        //borderRadius: "15px",
=======
        borderRadius: 15,
>>>>>>> 6dcf4dc1bdebae4785ee4124353669815c6c6441:front-end/mobile-app/Components/SymptomsCard/style.js
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
      },
      cardContent: {
        margin: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      },
})

export {Styles}