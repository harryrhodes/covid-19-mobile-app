import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../Components/Chart";
import CaseCounter from "../Components/Dashboard/Counters/CaseCounter";
import PaitentCounter from "../Components/Dashboard/Counters/PatientCounter";
import SymptomCounter from "../Components/Dashboard/Counters/SymptomCounter";
import UserCounter from "../Components/Dashboard/Counters/UserCounter";
import Navigation from "../Components/Common/Navigation";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../Components/Copyright";
import UserService from "../Services/UserService";
import SymptomService from "../Services/SymptomService";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [cases, setCases] = useState(0);
  const [patientCount, setPatientCount] = useState(null);
  const [symptomCount, setSymptomCount] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const today = new Date();
  const currentDate =
    "On: " +
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear();
  // const renderCounters = async () => {
  //   let res = await UserService.getAll();
  //   let users = res.data;
  //   console.log(res.data);
  //   for (let i = 0; i < users.length; i++) {
  //     setTotalUsers(users + 1);
  //     if (users[i].accountType === "patient") {
  //       setPatients(patients + 1);
  //     }
  //     if (users[i].patientDetails.status === "Positive") {
  //       setCases(cases + 1);
  //     }
  //   }
  //   console.log(cases, patients, totalUsers);
  // };
  const renderCases = async () => {};
  const renderPatientCounter = async () => {
    let res = await UserService.getAll();
    setUserCount(res.count);
    let users = res.data;
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountType == "Patient") {
        count++;
      } else {
      }
    }
    setPatientCount(count);
  };
  const renderSymptomCounter = async () => {
    let res = await SymptomService.getAll();
    setSymptomCount(res.count);
  };
  const renderUserCounter = async () => {
    let res = await UserService.getAll();
    setUserCount(res.count);
  };

  useEffect(() => {
    if (!userCount) {
      renderUserCounter();
    }
    if (!symptomCount) {
      renderSymptomCounter();
    }
    if (!patientCount) {
      renderPatientCounter();
    }
  });
  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <CaseCounter count={0} currentDate={currentDate} />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <PaitentCounter
                  count={patientCount}
                  currentDate={currentDate}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <SymptomCounter
                  count={symptomCount}
                  currentDate={currentDate}
                />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <UserCounter count={userCount} currentDate={currentDate} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
}
