import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from "recharts";
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

  const data01 = [
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
        <PieChart width={730} height={250}>
          <Tooltip />
          <Legend />
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            fill="#0D4F8B"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
