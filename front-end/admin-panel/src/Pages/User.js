import React, { useState, useEffect } from "react";
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
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import Skeleton from "@material-ui/lab/Skeleton";
import useForm from "../Hooks/useForm";
import Copyright from "../Components/Copyright";
import Navigation from "../Components/Common/Navigation";
import { useParams } from "react-router-dom";
import UserService from "../Services/UserService";
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

export default function User() {
  const params = useParams();
  const classes = useStyles();
  const [user, setUser] = useState(null);

  const updateExistingUser = async () => {
    if (values !== null) {
      //   let body = {
      //     username: values?.username || patient.username,
      //     password: values?.password || patient.password,
      //     email: values?.email || patient.email,
      //     firstName: values?.firstName || patient.firstName,
      //     lastName: values?.lastName || patient.lastName,
      //     accountType: "patient",
      //     role: {},
      //     patientDetails: {
      //       nhsNo: values?.nhsNo || patient.patientDetails?.nhsNo || "",
      //       niNo: values?.niNo || patient.patientDetails.niNo,
      //       mobileNo: values?.mobileNo || patient.patientDetails.mobileNo,
      //       nop: values?.nop || patient.patientDetails.nop,
      //       publicTransport: values?.publicTransport || patient.publicTransport,
      //       hospitalisations:
      //         values?.hospitalisations || patient.hospitalisations,
      //       diabetes: values?.diabetes || patient.patientDetails.diabetes,
      //       hypertension: values?.hypertension || patient.hypertension,
      //       dob: values?.dob || patient.patientDetails.dob,
      //       gender: values?.gender || patient.patientDetails.gender,
      //       status: values?.status || patient.patientDetails.status,
      //       address: {
      //         address1: values?.address1 || patient.address.address1,
      //         address2: values?.address2 || patient.address.address2,
      //         address3: values?.address3 || patient.address.address3,
      //         city: values?.city || patient.address.city,
      //         county: values?.county || patient.address.county,
      //         postcode: values?.postcode || patient.address.postcode,
      //         country: values?.country || patient.address.country,
      //       },
      //     },
      //   //   };
      //   console.log(body);
    } else {
      console.log("No Values Found");
    }
  };

  //   const deletePatient = async (patient) => {
  //     let res = await UserService.getSingle(patient.username);
  //   };

  const renderUser = async () => {
    let res = await UserService.getSingle(params.username);
    setUser(res.data[0]);
  };

  useEffect(() => {
    if (!user) {
      renderUser();
    }
  });

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
                    {"User Details: " + user.firstName + " " + user.lastName}
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
                          defaultValue={user.username}
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
                          defaultValue={user.email}
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
                          defaultValue={user.firstName}
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
                          defaultValue={user.lastName}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                      >
                        <FormLabel component="legend">AccountType</FormLabel>
                        <RadioGroup
                          row
                          name="gender"
                          defaultValue={user.accountType}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="admin"
                            control={<Radio color="primary" />}
                            label="Admin"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="pracitioner"
                            control={<Radio color="primary" />}
                            label="Practioner"
                            labelPlacement="end"
                          />
                        </RadioGroup>
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
                          name="email"
                          label="Title"
                          placeholder="Title"
                          defaultValue={user.role.title}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl className={clsx(classes.margin)} fullwidth>
                        <TextField
                          required
                          name="firstName"
                          label="Department"
                          placeholder="First Name"
                          defaultValue={user.role.department}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl className={clsx(classes.margin)} fullwidth>
                        <TextField
                          required
                          name="lastName"
                          label="Organisation"
                          placeholder="Last Name"
                          defaultValue={user.role.organisation}
                          variant="outlined"
                          onChange={handleChange}
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
              ) : (
                <Paper className={classes.paper}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Update User
                  </Button>
                  <Button variant="contained" color="secondary">
                    Delete User
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
