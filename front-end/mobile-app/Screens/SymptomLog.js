import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { Styles } from "../Styles/SymptomStyle";
import SymptomForm from "../Components/Symptoms/SymptomForm/SymptomForm";
import Welcome from "../Components/Home/Welcome/Welcome";

export default function SymptomLog() {
  const [cough, setCough] = useState();
  const [tiredness, setTiredness] = useState();
  const [fever, setFever] = useState();
  const [aches, setAches] = useState();
  const [throat, setThroat] = useState();
  const [diarrhoea, setDiarrhoea] = useState();
  const [conjunctivitus, setConjuct] = useState();
  const [headache, setHeadache] = useState();
  const [taste, setTaste] = useState();
  const [skin, setSkin] = useState();
  const [breath, setBreath] = useState();
  const [chest, setChest] = useState();
  const [speech, setSpeech] = useState();

  var json = {
    Cough: cough,
    Tiredness: tiredness,
    Fever: fever,
    Aches: aches,
    Throat: throat,
    Diarrhoea: diarrhoea,
    Conjunctivitus: conjunctivitus,
    Headache: headache,
    Taste: taste,
    Skin: skin,
    Breath: breath,
    Chest: chest,
    Speech: speech,
  };

  function tetsJson(json) {
    Object.values(json).map((value) => {
      if(value === undefined) {
        console.log('error')
      }
    })
  }

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Welcome text={"Most Common Symptoms"}/>
        <SymptomForm
          text={"Have you developed a dry cough? (Nothing being coughed up)"}
          value={cough}
          onChange={setCough}
        />
        <SymptomForm
          text={"Are you feeling more tired recently?"}
          value={tiredness}
          onChange={setTiredness}
        />
        <SymptomForm
          text={"Have you developed a fever?"}
          value={fever}
          onChange={setFever}
        />
        <Welcome text={"Less Common Symptoms"} />
        <SymptomForm
          text={"Are you experiencing general aches and pains?"}
          value={aches}
          onChange={setAches}
        />
        <SymptomForm
          text={"Has your throat become sore?"}
          value={throat}
          onChange={setThroat}
        />
        <SymptomForm
          text={"Have you had any diarrhoea"}
          value={diarrhoea}
          onChange={setDiarrhoea}
        />
        <SymptomForm
          text={"Have your eyes started to appear pinker? (Conjuctivitus)"}
          value={conjunctivitus}
          onChange={setConjuct}
        />
        <SymptomForm
          text={"Have you started having more frequent headaches?"}
          value={headache}
          onChange={setHeadache}
        />
        <SymptomForm
          text={
            "Have you lost your sense of taste/smell / Has it changed at all?"
          }
          value={taste}
          onChange={setTaste}
        />
        <SymptomForm
          text={"Has your skin developed any rashes or discoloured anywhere?"}
          value={skin}
          onChange={setSkin}
        />
        <Welcome
          text={"Serious Symptoms"}
          subhead={"Seek medical attention if experiencing these"}
        />
        <SymptomForm
          text={"Have you developed a fever?"}
          value={breath}
          onChange={setBreath}
        />
        <SymptomForm
          text={"Have you developed a fever?"}
          value={chest}
          onChange={setChest}
        />
        <SymptomForm
          text={"Have you developed a fever?"}
          value={speech}
          onChange={setSpeech}
        />
        <Button
          onPress={() => console.log(json)}
          mode="contained"
          style={Styles.loginButton}
        >
          Submit
        </Button>
        <Button
          onPress={() => tetsJson(json)}
          mode="contained"
          style={Styles.loginButton}
        >
          Try me please!
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
