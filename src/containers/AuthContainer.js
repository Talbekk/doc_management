import React, { useContext } from "react";
import LoginComponent from "../components/LoginComponent";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "../utils/Auth";

const AuthContainer = () => {
//     const { currentUser } = useContext(AuthContext);
  
//     if (currentUser) {
//       return <Redirect to="/" />;
//     }
    //
    return (
        <div>  
            <LoginComponent />
        </div>
    );
  };
  
  export default AuthContainer;