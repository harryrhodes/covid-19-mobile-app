import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../Components/Chart";
import CaseCounter from "../Components/Counters/CaseCounter";
import PaitentCounter from "../Components/Counters/PaitentCounter";
import SymptomCounter from "../Components/Counters/SymptomCounter";
import UserCounter from "../Components/Counters/UserCounter";
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
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
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
  );
}
