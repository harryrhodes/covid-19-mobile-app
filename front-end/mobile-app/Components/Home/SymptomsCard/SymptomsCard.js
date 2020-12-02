import React, {useContext}from "react";
import { View } from "react-native";
import { Headline, Card, Chip } from "react-native-paper";
import { Styles } from "./style";
import { UserContext } from "../../../Hooks/UserContext";

export default function SymptomsCard() {
  const { user, setUser } = useContext(UserContext);
  const renderStatus = () => {
    if (user.symptoms.length == 0) {
      return(<Headline>No current Symptoms!</Headline>)
    } else {
      let chips = [];
      for(let i=0; i<user.symptoms[0].details.length; i++){
        console.log(user.symptoms[0].details[i].name);
        if (user.symptoms[0].details[i].name == "comment"){

        }else{
          chips.push(
            <Chip key={user.symptoms[0].details[i].name} icon="information">{user.symptoms[0].details[i].name}</Chip>
          )
        }
        
      }
      return(chips)
    }
  }
  return (
    <View style={Styles.fullWidthView}>
      <Card style={Styles.card}>
        <Card.Title title="Current Symptoms" />
        <Card.Content style={Styles.cardContent}>
          {renderStatus()}
        </Card.Content>
      </Card>
    </View>
  );
}
