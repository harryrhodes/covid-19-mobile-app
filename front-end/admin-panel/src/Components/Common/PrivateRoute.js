import React, { useContext } from "react";
import { UserContext } from "../../Hooks/UserContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  const { loading } = user;
  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={routeProps => {
        return user.data ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;