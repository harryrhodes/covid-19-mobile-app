import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Chip,
  FormControl,

  Container,
  Box,
  useRadioGroup,

} from "@material-ui/core";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import Skeleton from "@material-ui/lab/Skeleton";
import useForm from "../Hooks/useForm";
import Copyright from "../Components/Copyright";
import Navigation from "../Components/Common/Navigation";

import UserService from "../Services/UserService";
import { UserContext } from "../Hooks/UserContext";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "31ch",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "100vh",
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

export default function Account() {
  const classes = useStyles();
  const [patient, setPatient] = useState(null);
  const { user, setUser } = useContext(UserContext);

  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={118} />
              ) : (
                <Paper className={classes.paper}>
                  <Title>
                    {"Account Details: " +
                      user.firstName +
                      " " +
                      user.lastName}
                  </Title>
                </Paper>
              )}
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={236} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Account Details</SubTitle>
                  <form className={classes.root}>
                    <div>
                      <FormControl className={classes.margin} fullWidth>
                        <TextField
                          required
                          name="username"
                          label="Username"
                          placeholder="Username"
                          defaultValue={patient.username}
                          variant="outlined"
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="password"
                          label="Password"
                          placeholder="Password"
                          variant="outlined"
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="confirmPassword"
                          label="Confirm Password"
                          placeholder="Confirm Password"
                          variant="outlined"
                        />
                      </FormControl>
                    </div>
                  </form>
                </Paper>
              )}
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
