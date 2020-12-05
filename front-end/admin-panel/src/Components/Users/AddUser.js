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
import UserService from "../../Services/UserService";
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
  const [unError, setUnError] = React.useState(false);
  const [unLabel, setUnLabel] = React.useState("Username (Required)");
  const [pwError, setPwError] = React.useState(false);
  const [pwLabel, setPwLabel] = React.useState("Password (Required)");
  const [pw2Error, setPw2Error] = React.useState(false);
  const [pw2Label, setPw2Label] = React.useState("Confirm Password (Required)");
  const [emailError, setEmailError] = React.useState(false);
  const [emailLabel, setEmailLabel] = React.useState("Email (Required)");
  const [fnError, setFnError] = React.useState(false);
  const [fnLabel, setFnLabel] = React.useState("First Name (Required)");
  const [lnError, setLnError] = React.useState(false);
  const [lnLabel, setLnLabel] = React.useState("Last Name (Required)");
  const [titleError, setTitleError] = React.useState(false);
  const [titleLabel, setTitleLabel] = React.useState("Role (Required)");
  const [departmentError, setDepartmentError] = React.useState(false);
  const [departmentLabel, setSepartmentLabel] = React.useState(
    "Department (Required)"
  );
  const [organisationError, setOrganisationError] = React.useState(false);
  const [organisationLabel, setOrganisationLabel] = React.useState(
    "Organisation (Required)"
  );

  const [accountTypeLabel, setAccountTypeLabel] = React.useState("");

  const pwRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const createNewUser = async () => {
    let secondUsername = "";
    let secondPassword = "";
    let secondPassword2 = "";
    let secondEmail = "";
    let secondFirstname = "";
    let secondLastname = "";

    let secondAccountType = "";
    let secondTitle = "";
    let secondDepartment = "";
    let secondOrganisation = "";

    if (values?.username === undefined) {
      secondUsername = "";
    } else {
      secondUsername = values.username;
    }

    if (values?.password === undefined) {
      secondPassword = "";
    } else {
      secondPassword = values.password;
    }

    if (values?.confirmPassword === undefined) {
      secondPassword2 = "";
    } else {
      secondPassword2 = values.confirmPassword;
    }

    if (values?.email === undefined) {
      secondEmail = "";
    } else {
      secondEmail = values.email;
    }

    if (values?.firstName === undefined) {
      secondFirstname = "";
    } else {
      secondFirstname = values.firstName;
    }

    if (values?.lastName === undefined) {
      secondLastname = "";
    } else {
      secondLastname = values.lastName;
    }

    if (values?.title === undefined) {
      secondTitle = "";
    } else {
      secondTitle = values.title;
    }

    if (values?.department === undefined) {
      secondDepartment = "";
    } else {
      secondDepartment = values.department;
    }

    if (values?.organisation === undefined) {
      secondOrganisation = "";
    } else {
      secondOrganisation = values.organisation;
    }

    if (values?.accountType === undefined) {
      secondAccountType = "";
    } else {
      secondAccountType = values.accountType;
    }

    let body = {
      username: secondUsername,
      password: secondPassword,
      email: secondEmail,
      firstName: secondFirstname,
      lastName: secondLastname,
      accountType: secondAccountType,
      role: {
        title: secondTitle,
        department: secondDepartment,
        organisation: secondOrganisation,
      },
    };
    let res = await UserService.register(body);
    setOpen(false);
  };

  const { values, handleChange, handleSubmit } = useForm(createNewUser);

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
        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
        <DialogContent>
          <form className={classes.root}>
            <SubTitle>Account Information</SubTitle>
            <div>
              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend">
                  Account Type (Required)
                </FormLabel>
                <FormLabel component="legend">{accountTypeLabel}</FormLabel>
                <RadioGroup
                  row
                  name="accountType"
                  defaultValue="top"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="admin"
                    control={<Radio color="primary" />}
                    label="Admin"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="practitioner"
                    control={<Radio color="primary" />}
                    label="Practitioner"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl className={classes.margin} fullWidth>
                <TextField
                  required
                  name="username"
                  label={unLabel}
                  placeholder="Username"
                  error={unError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="password"
                  label={pwLabel}
                  placeholder="Password"
                  error={pwError}
                  type="password"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="confirmPassword"
                  label={pw2Label}
                  placeholder="Confirm Password"
                  error={pw2Error}
                  type="password"
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
                  label={emailLabel}
                  placeholder="Email"
                  error={emailError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="firstName"
                  label={fnLabel}
                  placeholder="First Name"
                  error={fnError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="lastName"
                  label={lnLabel}
                  placeholder="Last Name"
                  error={lnError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
            </div>
            <SubTitle>Role Details</SubTitle>
            <div>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="title"
                  label={titleLabel}
                  placeholder="Role"
                  error={titleError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="department"
                  label={departmentLabel}
                  placeholder="Department"
                  error={departmentError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="organisation"
                  label={organisationLabel}
                  placeholder="Organisation"
                  error={organisationError}
                  variant="outlined"
                  onChange={handleChange}
                />
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
