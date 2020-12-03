import React, { useState, useMemo } from "react";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn";
import Users from "./Pages/Users";
import Patients from "./Pages/Patients";
import Patient from "./Pages/Patient";
import Symptoms from "./Pages/Symptoms";
import Cases from "./Pages/Cases";
import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/users" exact component={Users} />
          <Route path="/patients" exact component={Patients} />
          <Route path="/patient/:username" exact component={Patient} />
          {/* <Route path="/account/:username" exact component={Account} /> */}

          <Route path="/symptoms" exact component={Symptoms} />
          <Route path="/cases" exact component={Cases} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
