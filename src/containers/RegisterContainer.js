import React, { useContext } from "react";
import RegisterComponent from "../components/RegisterComponent";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../utils/Auth";

const RegisterContainer = () => {
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/" />;
    }
    
    return (
        <div>  
            <RegisterComponent />
        </div>
    );
  };
  
  export default RegisterContainer;