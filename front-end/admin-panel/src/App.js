import Dashboard from "./Pages/Dashboard"
import SignIn from "./Pages/SignIn"
import Users from "./Pages/Users"
import Patients from "./Pages/Patients"
import AccountOverview from "./Pages/AccountOverview"
import React from "react"


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/users" exact component={Users} />
        <Route path="/patients" exact component={Patients}/>
        <Route path="/accountoverview" exact component={AccountOverview}/>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
