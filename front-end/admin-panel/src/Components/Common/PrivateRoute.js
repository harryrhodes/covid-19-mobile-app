import React, { useContext } from "react";
import { UserContext } from "../../Hooks/UserContext";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
    const { user, setUser } = useContext(UserContext);
    return (
      <Route
        {...rest}
        render={(props) =>
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }