  import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth.js";

const PrivateRoute = ({
  component: RouteComponent,
  adminComponent: AdminRouteComponent,
  ...rest
}) => {
  const { currentUser, userData, isLoaded } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!isLoaded) return <p>Loading...</p>;
        if (currentUser != null && userData && userData.isAdmin)
          return <AdminRouteComponent {...routeProps} />;
        return currentUser != null ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;