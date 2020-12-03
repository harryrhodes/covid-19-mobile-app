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
} from "@material-ui/core";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import useForm from "../Hooks/useForm";
import Copyright from "../Components/Copyright";
import Navigation from "../Components/Common/Navigation";

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

export default function Patient(props) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [patient, setPatient] = useState(null);
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const updateExistingPatient = () => {
    console.log(values);
  };

  const renderPatient = async () => {
    console.log(props.id);
    
  };
  useEffect(() => {
    if (!patient) {
      renderPatient();
    }
  });


  const updateAccountDetails = () => {};
  const updatePersonalInfo = () => {};
  const updateMedicalInfo = () => {};
  const updateAddress = () => {};
  const updateAdditionalDetails = () => {};

  const { values, handleChange, handleSubmit } = useForm(updateExistingPatient);
  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
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
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <SubTitle>Patient Status</SubTitle>
                <Chip label="COVID Positive" color="Secondry" />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <SubTitle>
                  Account Details
                  <Button>{edit === false ? "Edit" : "Save"}</Button>
                </SubTitle>
                <form className={classes.root}>
                  <div>
                    <FormControl className={classes.margin} fullWidth>
                      <TextField
                        required
                        name="username"
                        label="Username"
                        placeholder="Username"
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        InputProps={{
                          readOnly: { edit },
                        }}
                      />
                    </FormControl>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <form className={classes.root}>
                  <SubTitle>
                    Personal Information
                    <Button>{edit === true ? "Edit" : "Save"}</Button>
                  </SubTitle>
                  <div>
                    <FormControl className={clsx(classes.margin)} fullWidth>
                      <TextField
                        required
                        name="email"
                        label="Email"
                        placeholder="Email"
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        defaultValue="top"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Male"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="female"
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
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
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
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                          readOnly: { edit },
                        }}
                      />
                    </FormControl>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <form className={classes.root}>
                  <SubTitle>
                    Medical Information
                    <Button>{edit === false ? "Edit" : "Save"}</Button>
                  </SubTitle>
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
                        defaultValue="top"
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
                        defaultValue="top"
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
                        defaultValue="top"
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
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <form className={classes.root}>
                  <SubTitle>
                    Address<Button>{edit === false ? "Edit" : "Save"}</Button>
                  </SubTitle>
                  <div>
                    <FormControl className={clsx(classes.margin)} fullWidth>
                      <TextField
                        required
                        name="address1"
                        label="Address 1"
                        placeholder="Address 1"
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
                        variant="outlined"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <form className={classes.root}>
                  <SubTitle>
                    Additional Details
                    <Button>{edit === false ? "Edit" : "Save"}</Button>
                  </SubTitle>
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
                        defaultValue="top"
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
                        defaultValue="top"
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
                        defaultValue="top"
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
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Title>Case Details</Title>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <Title>Patient Location</Title>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
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
                              geo.properties.NAME === "United Kingdom"
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
