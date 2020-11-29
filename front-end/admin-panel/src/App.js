import Dashboard from "./Pages/Dashboard"
import SignIn from "./Pages/SignIn"
import Users from "./Pages/Users"
import React from "react";
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
      </Switch>
    </BrowserRouter>
  )
}
export default App;
