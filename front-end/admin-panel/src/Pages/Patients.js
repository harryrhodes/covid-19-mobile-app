import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Navigation from "../Components/Common/Navigation";
import Copyright from "../Components/Copyright";
import Title from "../Components/Title";
import PatientsTable from "../Components/Patients/PatientsTable";
import AddPatient from "../Components/Patients/AddPatient";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
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

export default function Patients() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Title>Patients</Title>
                <PatientsTable />
              </Paper>
            </Grid>
            <AddPatient />
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
}
