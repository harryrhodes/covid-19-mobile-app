import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubTitle from "../SubTitle";
import useForm from "../../Hooks/useForm";
import SymptomService from "../../Services/SymptomService";
import {
  Fab,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText
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

export default function AddSymptom() {
  const classes = useStyles();
  const [symptomNameError, setSymptomNameError] = React.useState(false);
  const [symptomNameLabel, setSymptomNameLabel] = React.useState("Symptom Name (Required)");
  const [severityError, setSeverityError] = React.useState(false);
  const [severityLabel, setSeverityLabel] = React.useState("Severity (Required)");
  const [open, setOpen] = React.useState(false);

  const createNewSymptom = async () => {

    let secondSymptomName = "";
    let secondSeverity = "";

    if (values?.severity === undefined) {
      secondSeverity = "";
    } else {
      secondSeverity = values.severity;
    }

    if (values?.symptomName === undefined) {
      secondSymptomName = "";
    } else {
      secondSymptomName = values.symptomName;
    }
    
    let body = {
      name: secondSymptomName,
      severity: secondSeverity,
    };

    if (secondSymptomName == "") {
      setSymptomNameLabel("This field is required");
      setSymptomNameError(true);
    } else {
      setSymptomNameLabel("Symptom Name (Required)");
      setSymptomNameError(false);
      if (secondSeverity == "") {
        setSeverityLabel("This field is required");
        setSeverityError(true);
      } else {
        setSeverityLabel("Severity (Required)");
        setSeverityError(false);
        await SymptomService.create(body);
        setOpen(false);
      }
    }

  };

  const { values, handleChange, handleSubmit } = useForm(createNewSymptom);

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
        <DialogTitle id="form-dialog-title">Add New Symptom</DialogTitle>
        <DialogContent>
          <SubTitle>Symptom Information</SubTitle>
          <form className={classes.root}>
            <div>
              <FormControl className={classes.margin} fullWidth>
                <TextField
                  required
                  name="symptomName"
                  label={symptomNameLabel}
                  placeholder="Symptom Name"
                  variant="outlined"
                  onChange={handleChange}
                  error={symptomNameError}
                />
              </FormControl>
              <FormControl
                component="fieldset"
                className={classes.margin}
                fullWidth
              >
                <FormLabel component="legend">Severity</FormLabel>
                <RadioGroup
                  column
                  name="severity"
                  onChange={handleChange}
                  error={severityError}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label="1 - Minor"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label="2 - Low"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio color="primary" />}
                    label="3 - Moderate"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="4"
                    control={<Radio color="primary" />}
                    label="4 - High"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="5"
                    control={<Radio color="primary" />}
                    label="5 - Severe"
                    labelPlacement="end"
                  />
                </RadioGroup>
                <FormHelperText error={severityError}>{severityLabel}</FormHelperText>
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
