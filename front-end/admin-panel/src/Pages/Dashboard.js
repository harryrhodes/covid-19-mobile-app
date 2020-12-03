import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../Components/Chart";
import CaseCounter from "../Components/Dashboard/Counters/CaseCounter";
import PaitentCounter from "../Components/Dashboard/Counters/PaitentCounter";
import SymptomCounter from "../Components/Dashboard/Counters/SymptomCounter";
import UserCounter from "../Components/Dashboard/Counters/UserCounter";
import Navigation from "../Components/Common/Navigation";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../Components/Copyright";

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

  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <CaseCounter />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <PaitentCounter />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <SymptomCounter />
              </Paper>
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <UserCounter />
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
