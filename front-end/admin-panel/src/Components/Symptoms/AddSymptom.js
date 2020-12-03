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
    };
    console.log(body);
  };

  const { values, handleChange, handleSubmit } = useForm(createNewPatient);

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
                  label="Symptom Name"
                  placeholder="Symptom Name"
                  variant="outlined"
                  onChange={handleChange}
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
                  aria-label="position"
                  name="status"
                  defaultValue="top"
                  onChange={handleChange}
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
