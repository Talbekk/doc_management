import React, { useContext } from "react";
import { AuthContext } from "../utils/Auth.js";
import { Redirect } from "react-router-dom";
import UserPage from "../components/user/UserPage";

export default function HomeContainer() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <UserPage/>
    </div>
  );
}