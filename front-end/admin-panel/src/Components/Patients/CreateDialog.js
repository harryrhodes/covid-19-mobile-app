import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubTitle from "../SubTitle";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
          <SubTitle>Account Information</SubTitle>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="username"
                label="Username"
                defaultValue="Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                id="password"
                label="Password"
                defaultValue="Password"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                id="confirmPassword"
                label="Confirm Password"
                defaultValue="Confirm Password"
                variant="outlined"
                fullWidth
              />
            </div>
          </form>
          <SubTitle>Personal Information</SubTitle>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="email"
                label="Email"
                defaultValue="Email"
                variant="outlined"
              />
              <TextField
                required
                id="firstName"
                label="First Name"
                defaultValue="First Name"
                variant="outlined"
              />
              <TextField
                required
                id="lastName"
                label="Last Name"
                defaultValue="Last Name"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Date Of Birth"
                defaultValue="Date Of Birth"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Gender"
                defaultValue="Gender"
                variant="outlined"
              />
              <TextField
                id="outlined-required"
                label="NHS Number"
                defaultValue="NHS Number"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="NI Number"
                defaultValue="NI Number"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Mobile Number"
                defaultValue="Mobile Number"
                variant="outlined"
              />
            </div>
          </form>
          <SubTitle>Address</SubTitle>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="First Name"
                defaultValue="First Name"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                defaultValue="Last Name"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Date Of Birth"
                defaultValue="Date Of Birth"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Gender"
                defaultValue="Gender"
                variant="outlined"
              />
              <TextField
                id="outlined-required"
                label="NHS Number"
                defaultValue="NHS Number"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="NI Number"
                defaultValue="NI Number"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="Mobile Number"
                defaultValue="Mobile Number"
                variant="outlined"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
