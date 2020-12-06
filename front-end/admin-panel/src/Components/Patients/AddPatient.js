import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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
  FormHelperText,
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
  const [open, setOpen] = useState(false);
  const [unError, setUnError] = useState(false);
  const [unLabel, setUnLabel] = useState("Username (Required)");
  const [pwError, setPwError] = useState(false);
  const [pwLabel, setPwLabel] = useState("Password (Required)");
  const [pw2Error, setPw2Error] = useState(false);
  const [pw2Label, setPw2Label] = useState("Confirm Password (Required)");
  const [emailError, setEmailError] = useState(false);
  const [emailLabel, setEmailLabel] = useState("Email (Required)");
  const [fnError, setFnError] = useState(false);
  const [fnLabel, setFnLabel] = useState("First Name (Required)");
  const [lnError, setLnError] = useState(false);
  const [lnLabel, setLnLabel] = useState("Last Name (Required)");
  const [nhsError, setNhsError] = useState(false);
  const [nhsLabel, setNhsLabel] = useState("NHS Number (Optional)");
  const [niError, setNiError] = useState(false);
  const [niLabel, setNiLabel] = useState("NI Number (Required)");
  const [dobError, setDobError] = useState(false);
  const [dobLabel, setDobLabel] = useState("Date of Birth (Required)");
  const [mobileError, setMobileError] = useState(false);
  const [mobileLabel, setMobileLabel] = useState("Mobile Number (Required)");
  const [genderError, setGenderError] = useState(false);
  const [genderLabel, setGenderLabel] = useState("");
  const [hospitalisedError, setHospitalisedError] = useState(false);
  const [hospitalisedLabel, setHospitalisedLabel] = useState("");
  const [diabetesError, setDiabetesError] = useState(false);
  const [diabetesLabel, setDiabetesLabel] = useState("");
  const [hypertensionError, setHypertensionError] = useState(false);
  const [hypertensionLabel, setHypertensionLabel] = useState("");
  const [address1Label, setAddress1Label] = useState("Address 1 (Required)");
  const [address1Error, setAddress1Error] = useState(false);
  const [address2Label, setAddress2Label] = useState("Address 2 (Required)");
  const [address2Error, setAddress2Error] = useState(false);
  const [cityLabel, setCityLabel] = useState("City (Required)");
  const [cityError, setCityError] = useState(false);
  const [postcodeLabel, setPostcodeLabel] = useState("Postcode (Required)");
  const [postcodeError, setPostcodeError] = useState(false);
  const [countryLabel, setCountryLabel] = useState("Country (Required)");
  const [countryError, setCountryError] = useState(false);
  const [nopError, setNopError] = useState(false);
  const [nopLabel, setNopLabel] = useState("");
  const [transportError, setTransportError] = useState(false);
  const [transportLabel, setTransportLabel] = useState("");
  const [statusError, setStatusError] = useState(false);
  const [statusLabel, setStatusLabel] = useState("");
  const pwRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const niRe = /^(?!BG|GB|NK|KN|TN|NT|ZZ)[ABCEGHJ-PRSTW-Z][ABCEGHJ-NPRSTW-Z]\s*\d{2}\s*\d{2}\s*\d{2}\s*[A-D]$/;

  const validateNhsNumber = (secondNhsNo) => {
    if (!secondNhsNo == "") {
      if (!/^\d+$/.test(secondNhsNo)) {
        setNhsLabel("Your NHS Number can only contain digits");
        setNhsError(true);
      } else if (!/^\d{10}$/.test(secondNhsNo)) {
        setNhsLabel("Your NHS Number must be 10 digits exactly");
        setNhsError(true);
      } else {
        setNhsLabel("NHS Number (Optional)");
        setNhsError(false);
      }
    } else {
      setNhsLabel("NHS Number (Optional)");
      setNhsError(false);
    }
  };

  const createNewPatient = async () => {
    let secondUsername = "";
    let secondPassword = "";
    let secondPassword2 = "";
    let secondEmail = "";
    let secondFirstname = "";
    let secondLastname = "";

    let secondNhsNo = "";
    let secondNiNo = "";
    let secondMobileNo = "";
    let secondNop = "";
    let secondTransport = "";
    let secondHospitalisations = "";
    let secondDiabetes = "";
    let secondHypertension = "";
    let secondDob = "";
    let secondGender = "";
    let secondStatus = "";

    let secondAddress1 = "";
    let secondAddress2 = "";
    let secondAddress3 = "";
    let secondCity = "";
    let secondCounty = "";
    let secondPostcode = "";
    let secondCountry = "";

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

    if (values?.nhsNo === undefined) {
      secondNhsNo = "";
    } else {
      secondNhsNo = values.nhsNo;
    }

    if (values?.niNo === undefined) {
      secondNiNo = "";
    } else {
      secondNiNo = values.niNo;
    }

    if (values?.mobileNo === undefined) {
      secondMobileNo = "";
    } else {
      secondMobileNo = values.mobileNo;
    }

    if (values?.nop === undefined) {
      secondNop = "";
    } else {
      secondNop = values.nop;
    }

    if (values?.publicTransport === undefined) {
      secondTransport = "";
    } else {
      secondTransport = values.publicTransport;
    }

    if (values?.hospitalisations === undefined) {
      secondHospitalisations = "";
    } else {
      secondHospitalisations = values.hospitalisations;
    }

    if (values?.diabetes === undefined) {
      secondDiabetes = "";
    } else {
      secondDiabetes = values.diabetes;
    }

    if (values?.hypertension === undefined) {
      secondHypertension = "";
    } else {
      secondHypertension = values.hypertension;
    }

    if (values?.dob === undefined) {
      secondDob = "";
    } else {
      secondDob = values.dob;
    }

    if (values?.gender === undefined) {
      secondGender = "";
    } else {
      secondGender = values.gender;
    }

    if (values?.status === undefined) {
      secondStatus = "";
    } else {
      secondStatus = values.status;
    }

    if (values?.address1 === undefined) {
      secondAddress1 = "";
    } else {
      secondAddress1 = values.address1;
    }

    if (values?.address2 === undefined) {
      secondAddress2 = "";
    } else {
      secondAddress2 = values.address2;
    }

    if (values?.address3 === undefined) {
      secondAddress3 = "";
    } else {
      secondAddress3 = values.address3;
    }

    if (values?.city === undefined) {
      secondCity = "";
    } else {
      secondCity = values.city;
    }

    if (values?.county === undefined) {
      secondCounty = "";
    } else {
      secondCounty = values.county;
    }

    if (values?.postcode === undefined) {
      secondPostcode = "";
    } else {
      secondPostcode = values.postcode;
    }

    if (values?.country === undefined) {
      secondCountry = "";
    } else {
      secondCountry = values.country;
    }

    let body = {
      username: secondUsername,
      password: secondPassword,
      email: secondEmail,
      firstName: secondFirstname,
      lastName: secondLastname,
      accountType: "patient",
      role: {},
      symptoms: [],
      patientDetails: {
        nhsNo: secondNhsNo,
        niNo: secondNiNo,
        mobileNo: secondMobileNo,
        nop: secondNop,
        publicTransport: secondTransport,
        hospitalisations: secondHospitalisations,
        diabetes: secondDiabetes,
        hypertension: secondHypertension,
        dob: secondDob,
        gender: secondGender,
        status: secondStatus,
        address: {
          address1: secondAddress1,
          address2: secondAddress2,
          address3: secondAddress3,
          city: secondCity,
          county: secondCounty,
          postcode: secondPostcode,
          country: secondCountry,
        },
      },
    };

    if (secondUsername == "") {
      setUnLabel("This field is required");
      setUnError(true);
    } else {
      setUnLabel("Username (Required)");
      setUnError(false);
      let res = await UserService.getSingle(secondUsername);
      if (res.count != 0) {
        setUnLabel("Sorry this username is taken");
        setUnError(true);
      } else {
        setUnLabel("Username (Required)");
        setUnError(false);
        if (secondPassword == "") {
          setPwLabel("This field is required");
          setPwError(true);
        } else if (!pwRe.test(secondPassword)) {
          setPwLabel("Your password is not strong enough");
          setPwError(true);
        } else {
          setPwLabel("Password (Required");
          setPwError(false);
          if (secondPassword2 == "") {
            setPw2Label("This field is required");
            setPw2Error(true);
          } else if (secondPassword != secondPassword2) {
            setPw2Label("Passwords do not match");
            setPw2Error(true);
          } else {
            setPw2Label("Confirm Password (Required");
            setPw2Error(false);
            if (!emailRe.test(secondEmail)) {
              setEmailLabel("Please enter a valid email");
              setEmailError(true);
            } else {
              setEmailLabel("Email (Required)");
              setEmailError(false);

              if (secondFirstname.length <= 2) {
                setFnLabel("Names cannot be shorter than 2 letters");
                setFnError(true);
              } else if (!/^[a-zA-Z]+$/.test(secondFirstname)) {
                setFnLabel("Your first name must only contain letters");
                setFnError(true);
              } else {
                setFnLabel("First Name (Required)");
                setFnError(false);
                if (secondLastname.length <= 2) {
                  setLnLabel("Names cannot be shorter than 2 letters");
                  setLnError(true);
                } else if (!/^[a-zA-Z]+$/.test(secondLastname)) {
                  setLnLabel("Your last name must only contain letters");
                  setLnError(true);
                } else {
                  setLnLabel("Last Name (Required");
                  setLnError(false);
                  if (secondDob == "") {
                    setDobLabel("This field is required");
                    setDobError(true);
                  } else {
                    setDobLabel("Date of Birth (Required)");
                    setDobError(false);
                    if (secondGender == "") {
                      setGenderLabel("This field is required");
                      setGenderError(true);
                    } else {
                      setGenderLabel("");
                      setGenderError(false);
                      validateNhsNumber(secondNhsNo);
                      if (!niRe.test(secondNiNo)) {
                        setNiLabel("This is not a valid NI number");
                        setNiError(true);
                      } else {
                        setNiLabel("Ni Number (Required)");
                        setNiError(false);
                      }
                      if (!/^\d+$/.test(secondMobileNo)) {
                        setMobileLabel(
                          "Your mobile number can only contain digits"
                        );
                        setMobileError(true);
                      } else if (!/^\d{11}$/.test(secondMobileNo)) {
                        setMobileLabel(
                          "Your mobile number must be 11 digits exactly"
                        );
                        setMobileError(true);
                      } else {
                        setMobileLabel("Mobile Number (Required)");
                        setMobileError(false);
                        if (secondHospitalisations == "") {
                          setHospitalisedLabel("This is a required field");
                        } else {
                          setHospitalisedLabel("");
                          if (secondDiabetes == "") {
                            setDiabetesLabel("This is a required field");
                          } else {
                            setDiabetesLabel("");
                            if (secondHypertension == "") {
                              setHypertensionLabel("This is a required field");
                            } else {
                              setHypertensionLabel("");
                              if (secondAddress1 == "") {
                                setAddress1Label("This is a required field");
                                setAddress1Error(true);
                              } else {
                                setAddress1Label("Address 1 (Required)");
                                setAddress1Error(false);
                                if (secondAddress2 == "") {
                                  setAddress2Label("This is a required field");
                                  setAddress2Error(true);
                                } else {
                                  setAddress2Label("Address 2 (Required)");
                                  setAddress2Error(false);
                                  if (secondCity == "") {
                                    setCityLabel("This is a required field");
                                    setCityError(true);
                                  } else {
                                    setCityLabel("City (Required)");
                                    setCityError(false);
                                    if (secondPostcode == "") {
                                      setPostcodeLabel(
                                        "This is a required field"
                                      );
                                      setPostcodeError(true);
                                    } else {
                                      setPostcodeLabel("Postcode (Required)");
                                      setPostcodeError(false);
                                      if (secondCountry == "") {
                                        setCountryLabel(
                                          "This is a required field"
                                        );
                                        setCountryError(true);
                                      } else {
                                        setCountryLabel("Country (Required)");
                                        setCountryError(false);
                                        if (secondNop == "") {
                                          setNopLabel(
                                            "This is a required field"
                                          );
                                          setNopError(true);
                                        } else {
                                          setNopLabel("");
                                          setNopError(false);
                                          if (secondTransport == "") {
                                            setTransportLabel(
                                              "This is a required field"
                                            );
                                            setTransportError(true);
                                          } else {
                                            setTransportLabel("");
                                            setTransportError(false);
                                            if (secondStatus == "") {
                                              setStatusLabel(
                                                "This is a required field"
                                              );
                                              setStatusError(true);
                                            } else {
                                              setStatusLabel("");
                                              setStatusError(false);
                                              await UserService.register(body);
                                              setOpen(false);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
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
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <FormLabel component="legend">{dobLabel}</FormLabel>
                <TextField
                  required
                  name="dob"
                  error={dobError}
                  variant="outlined"
                  type="date"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend">Gender (Required)</FormLabel>

                <RadioGroup
                  row
                  name="gender"
                  defaultValue="top"
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
                <FormHelperText error={genderError}>
                  {genderLabel}
                </FormHelperText>
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  name="nhsNo"
                  label={nhsLabel}
                  placeholder="NHS Number (Optional)"
                  error={nhsError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="niNo"
                  label={niLabel}
                  placeholder="NI Number"
                  error={niError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="mobileNo"
                  label={mobileLabel}
                  placeholder="Mobile Number"
                  error={mobileError}
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
                <FormHelperText error={hospitalisedError}>
                  {hospitalisedLabel}
                </FormHelperText>
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
                <FormHelperText error={diabetesError}>
                  {diabetesLabel}
                </FormHelperText>
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
                <FormHelperText error={hypertensionError}>
                  {hypertensionLabel}
                </FormHelperText>
              </FormControl>
            </div>
            <SubTitle>Address</SubTitle>
            <div>
              <FormControl className={clsx(classes.margin)} fullWidth>
                <TextField
                  required
                  name="address1"
                  label={address1Label}
                  placeholder="Address 1"
                  error={address1Error}
                  variant="outlined"
                  onChange={handleChange}
                  error={errorCheck}
                />
              </FormControl>
              <FormControl className={classes.margin} fullWidth>
                <TextField
                  required
                  name="address2"
                  label={address2Label}
                  placeholder="Address 2"
                  error={address2Error}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={classes.margin} fullWidth>
                <TextField
                  name="address3"
                  label="Address 3 (Optional)"
                  placeholder="Address 3"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="city"
                  label={cityLabel}
                  placeholder="City"
                  error={cityError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  name="county"
                  label="County (Optional)"
                  placeholder="County"
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={clsx(classes.margin, classes.textField)}>
                <TextField
                  required
                  name="postcode"
                  label={postcodeLabel}
                  placeholder="Postcode"
                  error={postcodeError}
                  variant="outlined"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={classes.margin} fullWidth>
                <TextField
                  required
                  name="country"
                  label={countryLabel}
                  placeholder="Country"
                  error={countryError}
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
                <FormHelperText error={nopError}>{nopLabel}</FormHelperText>
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
                <FormHelperText error={transportError}>
                  {transportLabel}
                </FormHelperText>
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
                <FormHelperText error={statusError}>
                  {statusLabel}
                </FormHelperText>
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
