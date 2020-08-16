import React, { useContext, useState } from "react";
import HomeContainer from "./HomeContainer.js";
import AuthContainer from "./AuthContainer";
import AdminContainer from "./AdminContainer";
import RegisterContainer from "./RegisterContainer";
import { auth } from "../fire";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../utils/Auth.js";
import PrivateRoute from "../utils/PrivateRoute.js";
import { AuthProvider } from "../utils/Auth";

export default function MainContainer() {
  const [showModal, setShowModal] = useState(false);

  const { currentUser, userData } = useContext(AuthContext);

  function logOut() {
    auth.signOut();
  }


  // TODO remove redirect from switch
  return (
    <>
     {currentUser && (
              <button onClick={logOut}>
                LOG OUT
              </button>
     )}
      <div className="app-content">
        <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute
                path="/"
                exact
                component={HomeContainer}
                adminComponent={AdminContainer}
              />
              <Route path="/login" exact component={AuthContainer} />
              <Route path="/register" exact component={RegisterContainer} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}