import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  PieChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Pie,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Title from "../Title";
import UserService from "../../Services/UserService";

export default function UserChart() {
  const [PatientCounter, setPatientCount] = useState(null);
  const [PractitionerCounter, setPractitionerCount] = useState(null);
  const [AdminCounter, setAdminCounter] = useState(null);

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

  const colors = ["#1976d2", "#dc004e", "#4caf50"];
  return (
    <React.Fragment>
      <Title>Registered Account Types</Title>
      <ResponsiveContainer>
        <PieChart width={530} height={150}>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
