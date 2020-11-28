import React, {useContext } from "react";
import {SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../Styles/HomeStyle"
<<<<<<< HEAD
import SymptomsCard from "../Components/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/Welcome/Welcome";
import { UserContext } from "../Hooks/UserContext";
=======
import SymptomsCard from "../Components/Home/SymptomsCard/SymptomsCard";
import BookTestCard from "../Components/Home/BookTestCard/BookTestCard";
import LogSymptomsCard from "../Components/Home/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../Components/Home/Welcome/Welcome";
>>>>>>> 6dcf4dc1bdebae4785ee4124353669815c6c6441

export default function Home({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const logOut = async (user) => {
    setUser(null);
    navigation.goBack();
  }
  return (
    <SafeAreaView style={Styles.container}>
      <Welcome text={'Welcome, Harry'}/>
      <SymptomsCard />
      <BookTestCard />
      <LogSymptomsCard />
      <Button onPress={() => logOut(user)} >Log Out</Button>
    </SafeAreaView>
  );
}
