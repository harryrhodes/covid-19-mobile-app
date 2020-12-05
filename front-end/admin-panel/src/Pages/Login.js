import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../Components/Copyright";
import UserService from "../Services/UserService";
import { UserContext } from "../Hooks/UserContext";
import useForm from "../Hooks/useForm";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { setUserData } = useContext(UserContext);
  const [usernameErrorText, setUsernameErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const login = async () => {
    if (values == null) {
      setUsernameError(true);
      setPasswordError(true);
      setUsernameErrorText("This field is required");
      setPasswordErrorText("This field is required");
    } else if (values.username == null) {
      setUsernameError(true);
      setUsernameErrorText("This field is required");
    } else if (values.password == null) {
      setPasswordError(true);
      setPasswordErrorText("This field is required");
    } else {
      let res = await UserService.login(values.username, values.password);
      if (res.status == "Success") {
        setUserData(res.user);
        history.replace("/");
      } else if (res.status == "Invalid Username/Email") {
        setUsernameError(true);
        setUsernameErrorText(res.status);
      } else if (res.status == "Incorrect Password") {
        setPasswordError(true);
        setUsernameError(false);
        setPasswordErrorText(res.status);
      }
    }
  };

  const { values, handleChange, handleSubmit } = useForm(login);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={handleChange}
            error={usernameError}
            helperText={usernameErrorText}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            error={passwordError}
            helperText={passwordErrorText}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
