import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
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
}));

export default function Patient() {
  const params = useParams();
  const classes = useStyles();
  const [patient, setPatient] = useState(null);
  const [patientComment, setPatientComment] = useState(null);
  const [listItems, setListItems] = useState(null);
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const updateExistingPatient = async () => {
    if (values !== null) {
      let body = {
        username: values?.username || patient.username,
        password: values?.password || patient.password,
        email: values?.email || patient.email,
        firstName: values?.firstName || patient.firstName,
        lastName: values?.lastName || patient.lastName,
        accountType: "patient",
        role: {},
        patientDetails: {
          nhsNo: values?.nhsNo || patient.patientDetails?.nhsNo || "",
          niNo: values?.niNo || patient.patientDetails.niNo,
          mobileNo: values?.mobileNo || patient.patientDetails.mobileNo,
          nop: values?.nop || patient.patientDetails.nop,
          publicTransport: values?.publicTransport || patient.publicTransport,
          hospitalisations:
            values?.hospitalisations || patient.hospitalisations,
          diabetes: values?.diabetes || patient.patientDetails.diabetes,
          hypertension: values?.hypertension || patient.hypertension,
          dob: values?.dob || patient.patientDetails.dob,
          gender: values?.gender || patient.patientDetails.gender,
          status: values?.status || patient.patientDetails.status,
          address: {
            address1: values?.address1 || patient.address.address1,
            address2: values?.address2 || patient.address.address2,
            address3: values?.address3 || patient.address.address3,
            city: values?.city || patient.address.city,
            county: values?.county || patient.address.county,
            postcode: values?.postcode || patient.address.postcode,
            country: values?.country || patient.address.country,
          },
        },
      };
      console.log(body);
    } else {
      console.log("No Values Found");
    }
  };

  const history = useHistory();
  
  const deletePatient = async (patient) => {
    await UserService.delete(params.username);
    history.push("/patients");
  };

  const renderPatient = async () => {
    let res = await UserService.getSingle(params.username);
    let listItems = [];
    let symptoms = res.data[0].symptoms[0].details;
    for (let i = 0; i < symptoms.length; i++) {
      if (symptoms[i].name === "comment") {
        setPatientComment(
          <ListItem>
            <ListItemText primary={symptoms[i].comment} />
          </ListItem>
        );
      } else {
        listItems.push(
          <ListItem>
            <ListItemText primary={symptoms[i].name} />
          </ListItem>
        );
      }
    }
    setListItems(listItems);
    setPatient(res.data[0]);
  };

  useEffect(() => {
    if (!patient) {
      renderPatient();
    }
  });

  const { values, handleChange, handleSubmit } = useForm(updateExistingPatient);
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
                    {"Patient Details: " +
                      patient.firstName +
                      " " +
                      patient.lastName}
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
              {patient === null ? (
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
                          defaultValue={patient.email}
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
                          defaultValue={patient.firstName}
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
                          defaultValue={patient.lastName}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="dob"
                          label="Date Of Birth"
                          placeholder="Date Of Birth"
                          defaultValue={patient.patientDetails.dob}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                      >
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                          row
                          name="gender"
                          defaultValue={patient.patientDetails.gender}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="Male"
                            control={<Radio color="primary" />}
                            label="Male"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="Female"
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="Unspecified"
                            control={<Radio color="primary" />}
                            label="Unspecified"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          name="nhsNo"
                          label="NHS Number (Optional)"
                          placeholder="NHS Number (Optional)"
                          defaultValue={patient.patientDetails.nhsNo}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="niNo"
                          label="NI Number"
                          placeholder="NI Number"
                          defaultValue={patient.patientDetails.niNo}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="mobileNo"
                          label="Mobile Number"
                          placeholder="Mobile Number"
                          defaultValue={patient.patientDetails.mobileNo}
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
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Medical Information</SubTitle>
                  <form className={classes.root}>
                    <div>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                        fullWidth
                      >
                        <FormLabel component="legend">
                          How Many Times Has The Patient Been Hospitalised?
                        </FormLabel>
                        <RadioGroup
                          column
                          name="hospitalisations"
                          defaultValue={patient.patientDetails.hospitalisations}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="0"
                            control={<Radio color="primary" />}
                            label="Never Been Hospitalised"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="1 Time"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="2 Times"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio color="primary" />}
                            label="3 Times"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio color="primary" />}
                            label="4 Times"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="5"
                            control={<Radio color="primary" />}
                            label="5 Times"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="5+"
                            control={<Radio color="primary" />}
                            label="More Than 5 Times"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                      >
                        <FormLabel component="legend">
                          Is the Patient Diabetic?
                        </FormLabel>
                        <RadioGroup
                          row
                          name="diabetes"
                          defaultValue={patient.patientDetails.diabetes}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="no"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="type1"
                            control={<Radio color="primary" />}
                            label="Type 1"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="type2"
                            control={<Radio color="primary" />}
                            label="Type 2"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                      >
                        <FormLabel component="legend">
                          Does the Patient suffer from Hypertension?
                        </FormLabel>
                        <RadioGroup
                          row
                          name="hypertension"
                          defaultValue={patient.patientDetails.hypertension}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="false"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Yes"
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
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Address</SubTitle>
                  <form className={classes.root}>
                    <div>
                      <FormControl className={clsx(classes.margin)} fullWidth>
                        <TextField
                          required
                          name="address1"
                          label="Address 1"
                          placeholder="Address 1"
                          defaultValue={patient.patientDetails.address.address1}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl className={classes.margin} fullWidth>
                        <TextField
                          required
                          name="address2"
                          label="Address 2"
                          placeholder="Address 2"
                          defaultValue={patient.patientDetails.address.address2}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl className={classes.margin} fullWidth>
                        <TextField
                          required
                          name="address3"
                          label="Address 3"
                          placeholder="Address 3"
                          defaultValue={patient.patientDetails.address.address3}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="city"
                          label="City"
                          placeholder="City"
                          defaultValue={patient.patientDetails.address.city}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="county"
                          label="County"
                          placeholder="County"
                          defaultValue={patient.patientDetails.address.county}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <TextField
                          required
                          name="postcode"
                          label="Postcode"
                          placeholder="Postcode"
                          defaultValue={patient.patientDetails.address.postcode}
                          variant="outlined"
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl className={classes.margin} fullWidth>
                        <TextField
                          required
                          name="country"
                          label="Country"
                          placeholder="Country"
                          defaultValue={patient.patientDetails.address.country}
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
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <form className={classes.root}>
                    <SubTitle>Additional Details</SubTitle>
                    <div>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                        fullWidth
                      >
                        <FormLabel component="legend">
                          Number of people in the Patient's household
                        </FormLabel>
                        <RadioGroup
                          column
                          name="nop"
                          defaultValue={patient.patientDetails.nop}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="0"
                            control={<Radio color="primary" />}
                            label="Lives Alone"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="1 Person"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="2 People"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio color="primary" />}
                            label="3 People"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="4"
                            control={<Radio color="primary" />}
                            label="4 People"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="4+"
                            control={<Radio color="primary" />}
                            label="More Than 4 People"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                      >
                        <FormLabel component="legend">
                          Is the Patient a regular user of Public Transport?
                        </FormLabel>
                        <RadioGroup
                          row
                          name="publicTransport"
                          defaultValue={patient.patientDetails.publicTransport}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="false"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <SubTitle>COVID-19 Status</SubTitle>
                    <div>
                      <FormControl
                        component="fieldset"
                        className={classes.margin}
                        fullWidth
                      >
                        <FormLabel component="legend">Patient Status</FormLabel>
                        <RadioGroup
                          row
                          aria-label="position"
                          name="status"
                          defaultValue={patient.patientDetails.status}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="Not Tested"
                            control={<Radio color="primary" />}
                            label="Not Tested"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="Awaiting Test Results"
                            control={<Radio color="primary" />}
                            label="Awaiting Test Results"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="Positive"
                            control={<Radio color="primary" />}
                            label="Positive"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="Negative"
                            control={<Radio color="primary" />}
                            label="Negative"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </form>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={118} />
              ) : (
                <Paper className={classes.paper}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Update Patient
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={deletePatient}
                  >
                    Delete Patient
                  </Button>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={118} />
              ) : (
                <Paper className={classes.paper}>
                  <Title>Case Details</Title>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Patient Status</SubTitle>
                  <Chip
                    label={patient.patientDetails.status}
                    color="secondary"
                  />
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={472} />
              ) : (
                <Paper className={classes.paper}>
                  <SubTitle>Current Symptoms</SubTitle>
                  <List
                    subheader={
                      <ListSubheader>
                        {"Symptoms Last Logged: " +
                          Date(patient.symptoms[0].date)}
                      </ListSubheader>
                    }
                    className={classes.root}
                  >
                    {listItems}
                  </List>
                  <SubTitle>Patient Side Effects</SubTitle>
                  <List>{patientComment}</List>
                </Paper>
              )}
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={118} />
              ) : (
                <Paper className={classes.paper}>
                  <Title>Patient Location</Title>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              {patient === null ? (
                <Skeleton variant="rect" width={"100%"} height={708} />
              ) : (
                <Paper className={classes.paper}>
                  <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
                    <ZoomableGroup>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              style={
                                geo.properties.NAME ===
                                patient.patientDetails.address.country
                                  ? {
                                      default: {
                                        fill: "#1976d2",
                                        outline: "none",
                                      },
                                      hover: {
                                        fill: "#D6D6DA",
                                        outline: "none",
                                      },
                                      pressed: {
                                        fill: "#D6D6DA",
                                        outline: "none",
                                      },
                                    }
                                  : {
                                      default: {
                                        fill: "#D6D6DA",
                                        outline: "none",
                                      },
                                      hover: {
                                        fill: "#D6D6DA",
                                        outline: "none",
                                      },
                                      pressed: {
                                        fill: "#D6D6DA",
                                        outline: "none",
                                      },
                                    }
                              }
                            />
                          ))
                        }
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>
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
