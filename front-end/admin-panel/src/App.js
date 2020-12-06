import React, { useState, useMemo } from "react";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
import Login from "./Pages/Login";
import Users from "./Pages/Users";
import User from "./Pages/User";
import Patients from "./Pages/Patients";
import Patient from "./Pages/Patient";
import Symptoms from "./Pages/Symptoms";
import Cases from "./Pages/Cases";
import SymptomTrends from "./Pages/Trends/SymptomTrends";
import UserTrends from "./Pages/Trends/UserTrends";
import PatientTrends from "./Pages/Trends/PatientTrends";
import CaseTrends from "./Pages/Trends/CaseTrends";
import { makeStyles } from "@material-ui/core/styles";
import AuthProvider from "./Hooks/UserContext";
import PrivateRoute from "./Components/Common/PrivateRoute";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <AuthProvider>
            <Route path="/login" exact component={Login} />
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/account" exact component={Account} />
            <PrivateRoute path="/users" exact component={Users} />
            <PrivateRoute path="/user/:username" exact component={User} />
            <PrivateRoute path="/patients" exact component={Patients} />
            <PrivateRoute path="/patient/:username" exact component={Patient} />
            <PrivateRoute path="/symptoms" exact component={Symptoms} />
            <PrivateRoute path="/cases" exact component={Cases} />
            <PrivateRoute
              path="/symptomtrends"
              exact
              component={SymptomTrends}
            />
            <PrivateRoute path="/usertrends" exact component={UserTrends} />
            <PrivateRoute
              path="/patienttrends"
              exact
              component={PatientTrends}
            />
            <PrivateRoute
              path="/casetrends"
              exact
              component={CaseTrends}
            />
          </AuthProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
