import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import Title from "../Title";
import SymptomService from "../../Services/SymptomService";

export default function SymptomGraph() {
  const [severitycounter1, setSeverityCount1] = useState(null);
  const [severitycounter2, setSeverityCount2] = useState(null);
  const [severitycounter3, setSeverityCount3] = useState(null);
  const [severitycounter4, setSeverityCount4] = useState(null);
  const [severitycounter5, setSeverityCount5] = useState(null);

  const renderSeverityCounter = async () => {
    let res = await SymptomService.getAll();
    let symptoms = res.data;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    for (let i = 0; i < symptoms.length; i++) {
      if (symptoms[i].severity == "1") {
        count1++;
      } else if (symptoms[i].severity == "2") {
        count2++;
      } else if (symptoms[i].severity == "3") {
        count3++;
      } else if (symptoms[i].severity == "4") {
        count4++;
      } else if (symptoms[i].severity == "5") {
        count5++;
      } else {
      }
    }
    setSeverityCount1(count1);
    setSeverityCount2(count2);
    setSeverityCount3(count3);
    setSeverityCount4(count4);
    setSeverityCount5(count5);
  };

  useEffect(() => {
    if (!severitycounter1) {
      renderSeverityCounter();
    }
  });

  const data = [
    {
      name: "1 - Minor",
      "Symptom Count": severitycounter1,
    },
    {
      name: "2 - Low",
      "Symptom Count": severitycounter2,
    },
    {
      name: "3 - Moderate",
      "Symptom Count": severitycounter3,
    },
    {
      name: "4 - High",
      "Symptom Count": severitycounter4,
    },
    {
      name: "5 - Severe",
      "Symptom Count": severitycounter5,
    },
  ];

  return (
    <React.Fragment>
      <Title>Symptom Severity</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="Number of Symptoms" fill="#00009C" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
