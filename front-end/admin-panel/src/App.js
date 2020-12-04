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
import { makeStyles } from "@material-ui/core/styles";
import { UserContext as UserContext } from "./Hooks/UserContext";
import PrivateRoute from "./Components/Common/PrivateRoute";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
    <UserContext.Provider value={value}>
      <div className={classes.root}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={Login} />
            <Route path="/account" exact component={Account} />
            <Route path="/users" exact component={Users} />
            <Route path="/user/:username" exact component={User} />
            <Route path="/patients" exact component={Patients} />
            <Route path="/patient/:username" exact component={Patient} />
            <Route path="/symptoms" exact component={Symptoms} />
            <Route path="/cases" exact component={Cases} />
            <Route path="/symptomtrends" exact component={SymptomTrends} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}
export default App;
