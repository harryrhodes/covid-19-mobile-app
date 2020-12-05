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

export default function UserChart() {
  const [PatientCounter, setPatientCount] = useState(null);
  const [PractitionerCounter, setPractitionerCount] = useState(null);
  const [AdminCounter, setAdminCounter] = useState(null);
  const theme = useTheme();

  const renderUserCounters = async () => {
    let res = await UserService.getAll();
    let users = res.data;
    let PatientCounter = 0;
    let PractitionerCounter = 0;
    let AdminCounter = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountType == "patient") {
        PatientCounter++;
      } else if (users[i].accountType == "practitioner") {
        PractitionerCounter++;
      } else if (users[i].accountType == "admin") {
        AdminCounter++;
      } else {
      }
    }
    setPatientCount(PatientCounter);
    setPractitionerCount(PractitionerCounter);
    setAdminCounter(AdminCounter);
  };
  useEffect(() => {
    if (!PatientCounter) {
      renderUserCounters();
    }
    if (!PractitionerCounter) {
      renderUserCounters();
    }
    if (!AdminCounter) {
      renderUserCounters();
    }
  });

  const data = [
    {
      name: "Patient",
      value: PatientCounter,
    },

    {
      name: "Practitioner",
      value: PractitionerCounter,
    },

    {
      name: "Admin",
      value: AdminCounter,
    },
  ];

  return (
    <React.Fragment>
      <Title>Accounts Registered</Title>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
