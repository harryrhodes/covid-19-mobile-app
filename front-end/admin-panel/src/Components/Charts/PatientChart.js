import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart ,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import Title from "../Title";
import UserService from "../../Services/UserService";

export default function PatientChart({ count }) {
  const [jan, setJan] = useState(null);
  const [feb, setFeb] = useState(null);
  const [mar, setMar] = useState(null);
  const [apr, setApr] = useState(null);
  const [may, setMay] = useState(null);
  const [jun, setJun] = useState(null);
  const [jul, setJul] = useState(null);
  const [aug, setAug] = useState(null);
  const [sep, setSep] = useState(null);
  const [oct, setOct] = useState(null);
  const [nov, setNov] = useState(null);
  const [dec, setDec] = useState(null);

  const theme = useTheme();

  const renderPatientCounters = async () => {
    let res = await UserService.getAll();
    let users = res.data;
    let jan = 0;
    let feb = 0;
    let mar = 0;
    let apr = 0;
    let may = 0;
    let jun = 0;
    let jul = 0;
    let aug = 0;
    let oct = 0;
    let nov = 0;
    let dec = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountType == "patient"){
        let month = new Date(users[i].createdDate).getMonth() + 1;
        if (month == 1){
          jan++
        }else if(month == 2){
          feb++
        }else if(month == 3){
          mar++
        }else if(month == 4){
          apr++
        }else if(month == 5){
          may++
        }else if(month == 6){
          jun++
        }else if(month == 7){
          jul++
        }else if(month == 8){
          aug++
        }else if(month == 9){
          sep++
        }else if(month == 10){
          oct++
        }else if(month == 11){
          nov++
        }else if(month == 12){
          dec++
        }
      }
    }
    setJan(jan);
    setFeb(feb);
    setMar(mar);
    setApr(apr);
    setMay(may);
    setJun(jun);
    setJul(jul);
    setAug(aug);
    setSep(sep);
    setOct(oct);
    setNov(nov);
    setDec(dec);
  };
  useEffect(() => {
    if (!count) {
      renderPatientCounters();
    }
  });

  const data = [
    {
      name: "January",
      value: jan,
    },
    {
      name: "February",
      value: feb,
    },
    {
      name: "March",
      value: mar,
    },
    {
      name: "April",
      value: apr,
    },
    {
      name: "May",
      value: may,
    },
    {
      name: "June",
      value: jun,
    },
    {
      name: "July",
      value: jul,
    },
    {
      name: "August",
      value: aug,
    },
    {
      name: "September",
      value: sep,
    },
    {
      name: "October",
      value: oct,
    },
    {
      name: "November",
      value: nov,
    },
    {
      name: "December",
      value: dec,
    },
  ];

  const colors = ["#1976d2", "#dc004e", "#4caf50"];
  return (
    <React.Fragment>
      <Title>Patient Accounts Over Time</Title>
      <ResponsiveContainer>
        <LineChart  width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false}/>
          <Tooltip />
          <Line dataKey="value" stroke="#1976d2" />
        </LineChart >
      </ResponsiveContainer>
    </React.Fragment>
  );
}
