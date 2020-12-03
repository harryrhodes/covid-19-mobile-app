import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubTitle from "../SubTitle";
import useForm from "../../Hooks/useForm";
import {
  Fab,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
  fab: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default function CreateDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const createNewPatient = () => {
    console.log(values);
    let body = {
      username: values.username,
      password: values.password,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      accountType: "patient",
      role: {},
      patientDetails: {
        nhsNo: values.nhsNo,
        niNo: values.niNo,
        mobileNo: values.mobileNo,
        nop: values.nop,
        publicTransport: values.publicTransport,
        hospitalisations: values.hospitalisations,
        diabetes: values.diabetes,
        hypertension: values.hypertension,
        dob: values.dob,
        gender: values.gender,
        status: values.status,
        address: {
          address1: values.address1,
          address2: values.address2,
          address3: values.address3,
          city: values.city,
          county: values.county,
          postcode: values.postcode,
          country: values.country,
        },
      },
    };
    console.log(body);
  };

  const { values, handleChange, handleSubmit, errorCheck } = useForm(
    createNewPatient
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Patient</DialogTitle>
        <DialogContent>
          <form className={classes.root}>
            <SubTitle>Account Information</SubTitle>
            <div>
              <FormControl className={classes.margin} fullWidth>
                <TextField
                  required
                  name="username"
                  label="Username"
                  placeholder="Username"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="password"
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
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

            <SubTitle>Personal Information</SubTitle>

            <div>
              <FormControl className={clsx(classes.margin)} fullWidth>
                <TextField
                  required
                  name="email"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="dob"
                  label="Date Of Birth"
                  placeholder="Date Of Birth"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  defaultValue="top"
                  onChange={handleChange}
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
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  name="nhsNo"
                  label="NHS Number (Optional)"
                  placeholder="NHS Number (Optional)"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="niNo"
                  label="NI Number"
                  placeholder="NI Number"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="mobileNo"
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <SubTitle>Medical Information</SubTitle>
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
              <FormControl component="fieldset" className={classes.margin}>
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
              <FormControl component="fieldset" className={classes.margin}>
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
            <SubTitle>Address</SubTitle>
            <div>
              <FormControl className={clsx(classes.margin)} fullWidth>
                <TextField
                  required
                  name="address1"
                  label="Address 1"
                  placeholder="Address 1"
                  variant="outlined"
                  onChange={handleChange}
                  error={errorCheck}
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
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="city"
                  label="City"
                  placeholder="City"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="county"
                  label="County"
                  placeholder="County"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
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
              <FormControl component="fieldset" className={classes.margin}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
