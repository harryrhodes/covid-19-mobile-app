import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CaseCounter from "../Components/Dashboard/Counters/CaseCounter";
import PatientCounter from "../Components/Dashboard/Counters/PatientCounter";
import SymptomCounter from "../Components/Dashboard/Counters/SymptomCounter";
import UserCounter from "../Components/Dashboard/Counters/UserCounter";
import Navigation from "../Components/Common/Navigation";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../Components/Copyright";
import UserService from "../Services/UserService";
import SymptomService from "../Services/SymptomService";
import SymptomGraph from "../Components/Charts/SymptomGraph";
import UserChart from "../Components/Charts/UserChart.js"

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
  doubleFixedHeight: {
    height: 480,
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
  const doubleFixedHeightPaper = clsx(classes.paper, classes.doubleFixedHeight);
  const [caseCount, setCaseCount] = useState(null);
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

  const renderCaseCounter = async () => {
    let res = await UserService.getAll();
    let users = res.data;
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountType == "patient" && users[i].patientDetails.status == "Positive") {
        count++;
      } else {
      }
    }
    setCaseCount(count);
  };
  const renderPatientCounter = async () => {
    let res = await UserService.getAll();
    setUserCount(res.count);
    let users = res.data;
    let count = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountType == "patient") {
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
    if (!caseCount) {
      renderCaseCounter();
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
                <PatientCounter
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
              <Paper className={doubleFixedHeightPaper}>
                <SymptomGraph />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={doubleFixedHeightPaper}>
                <UserChart />
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
