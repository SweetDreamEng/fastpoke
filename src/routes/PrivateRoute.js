import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getCookie } from "../utils/helpers";

const PrivateRoute = ({ render, component, redirectTo, path, ...rest }) => {
  const Component = render || component;

  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        const { access_token } = JSON.parse(getCookie("user"));

        if (!access_token) {
          return <Redirect to={redirectTo} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
