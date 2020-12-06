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
import UserService from "../../Services/UserService";

export default function PatientChart({ count }) {
  const [patientCount, setPatientCount] = useState(null);
  const [positiveCounter, setPositiveCounter] = useState(null);
  const [negativeCounter, setNegativeCounter] = useState(null);
  const [notTestedCounter, setNotTestedCounter] = useState(null);
  const [awaitingResultsCounter, setAwaitingResultsCounter] = useState(null);
  const theme = useTheme();

  const renderPatientCounters = async () => {
    let res = await UserService.getAll();
    let users = res.data;
    let positiveCounter = 0;
    let negativeCounter = 0;
    let notTestedCounter = 0;
    let awaitingResultsCounter = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].patientDetails.status == "Positive") {
        positiveCounter++;
      } else if (users[i].patientDetails.status == "Negative") {
        negativeCounter++;
      } else if (users[i].patientDetails.status == "Not Tested") {
        notTestedCounter++;
      } else if (users[i].patientDetails.status == "Awaiting Results") {
        awaitingResultsCounter++;
      } else {
      }
    }
    setPositiveCounter(positiveCounter);
    setNegativeCounter(negativeCounter);
    setNotTestedCounter(notTestedCounter);
    setAwaitingResultsCounter(awaitingResultsCounter);
  };
  useEffect(() => {
    if (!count) {
      renderPatientCounters();
    }
  });

  const data = [
    {
      name: "Positive",
      value: positiveCounter,
    },

    {
      name: "Negative",
      value: negativeCounter,
    },

    {
      name: "Not Tested",
      value: notTestedCounter,
    },
    {
      name: "Awaiting Test Results",
      value: awaitingResultsCounter,
    },
  ];

  const colors = ["#1976d2", "#dc004e", "#4caf50"];
  return (
    <React.Fragment>
      <Title>Patient Status Overview</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false}/>
          <Tooltip />
          <Bar dataKey="value" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
