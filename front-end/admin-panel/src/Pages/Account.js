import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  Container,
  Box,
} from "@material-ui/core";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import Skeleton from "@material-ui/lab/Skeleton";
import useForm from "../Hooks/useForm";
import Copyright from "../Components/Copyright";
import Navigation from "../Components/Common/Navigation";

import UserService from "../Services/UserService";
import { UserContext } from "../Hooks/UserContext";
import { useHistory } from "react-router-dom";
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
  deleteButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function Account() {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUserData } = useContext(UserContext);

  const updateExistingUser = async () => {
    if (values !== null) {
      let body = {
        username: values?.username || user.username,
        password: values?.password || "",
        email: values?.email || user.email,
        firstName: values?.firstName || user.firstName,
        lastName: values?.lastName || user.lastName,
      };
      let res = UserService.update(user.username, body);
      setUserData(res.data);
      history.replace("/");
    } else {
      console.log("No Values Found");
    }
  };

  const deleteUser = async () => {
    let res = await UserService.delete(user.data.username);
    setUserData(null);
    history.replace("/login");
  };

  const { values, handleChange, handleSubmit } = useForm(updateExistingUser);

  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              {user === null ? (
                <Skeleton variant="rect" width={"100%"} height={118} />
              ) : (
                <Paper className={classes.paper}>
                  <Title>
                    {"Account Details: " +
                      user.data.firstName +
                      " " +
                      user.data.lastName}
                  </Title>
                </Paper>
              )}
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              {user === null ? (
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
                          defaultValue={user.data.username}
                          variant="outlined"
                          onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                        />
                      </FormControl>
                    </div>
                  </form>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {user === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Personal Information</SubTitle>
                  <form className={classes.root}>
                    <div>
                      <FormControl className={clsx(classes.margin)} fullWidth>
                        <TextField
                          required
                          name="email"
                          label="Email"
                          placeholder="Email"
                          defaultValue={user.data.email}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="firstName"
                          label="First Name"
                          placeholder="First Name"
                          defaultValue={user.data.firstName}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="lastName"
                          label="Last Name"
                          placeholder="Last Name"
                          defaultValue={user.data.lastName}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                    </div>
                  </form>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {user === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Role Information</SubTitle>
                  <form className={classes.root}>
                    <div>
                      <FormControl className={clsx(classes.margin)} fullWidth>
                        <TextField
                          required
                          name="title"
                          label="Title"
                          placeholder="Title"
                          defaultValue={user.data.role.title}
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </FormControl>
                      <FormControl className={clsx(classes.margin)} fullwidth>
                        <TextField
                          required
                          name="department"
                          label="Department"
                          placeholder="First Name"
                          defaultValue={user.data.role.department}
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </FormControl>
                      <FormControl className={clsx(classes.margin)} fullwidth>
                        <TextField
                          required
                          name="organisation"
                          label="Organisation"
                          placeholder="Last Name"
                          defaultValue={user.data.role.organisation}
                          variant="outlined"
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </FormControl>
                    </div>
                  </form>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {user === null ? (
                <Skeleton variant="rect" width={"100%"} height={118} />
              ) : user.accountType != "admin" ? (
                <Paper className={classes.paper}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Update Account
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.deleteButton}
                    onClick={deleteUser}
                  >
                    Delete User
                  </Button>
                </Paper>
              ) : (
                <Paper className={classes.paper}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Update Account
                  </Button>
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
