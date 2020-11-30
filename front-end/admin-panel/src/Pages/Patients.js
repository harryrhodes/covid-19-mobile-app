import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Title from "../Components/Title";
import PatientsTable from "../Components/PatientsTable";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "100vh",
  },
}));

export default function Users() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Title>Patients</Title>
          <PatientsTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
