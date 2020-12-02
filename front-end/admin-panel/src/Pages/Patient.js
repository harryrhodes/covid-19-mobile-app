import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Chip,
  Fab,
} from "@material-ui/core";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
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
}));

export default function Users() {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
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
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Title>Patient Status</Title>
          <Chip label="COVID Positive" color="Secondry" />
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Title>Patient Details</Title>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <SubTitle>
            Account Details<Button>Edit</Button>{" "}
          </SubTitle>

          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue="Username"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Password"
                defaultValue="Password"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                defaultValue="Confirm Password"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
            </div>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper className={classes.paper}>
          <SubTitle>
            Personal Information<Button>Edit</Button>{" "}
          </SubTitle>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="First Name"
                defaultValue="First Name"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                defaultValue="Last Name"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Date Of Birth"
                defaultValue="Date Of Birth"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Gender"
                defaultValue="Gender"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                id="outlined-required"
                label="NHS Number"
                defaultValue="NHS Number"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="NI Number"
                defaultValue="NI Number"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Mobile Number"
                defaultValue="Mobile Number"
                variant="outlined"
                InputProps={{
                  readOnly: { edit },
                }}
              />
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
          <Title>Location</Title>
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
                        geo.properties.NAME == "United Kingdom"
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
  );
}
