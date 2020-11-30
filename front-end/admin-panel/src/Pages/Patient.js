import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Grid, Paper, Avatar} from "@material-ui/core";
import Title from "../Components/Title";

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
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Title>Patient Details</Title>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <Title>Harry Rhodes</Title>
          <Avatar>HR</Avatar>
        </Paper>
      </Grid>
      <Grid item xs={6} md={6} lg={6}>
        <Paper className={classes.paper}>
          <Title>Harry Rhodes</Title>
          <Avatar>HR</Avatar>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Title>Harry Rhodes</Title>
          <Avatar>HR</Avatar>
        </Paper>
      </Grid>
    </Grid>
  );
}
