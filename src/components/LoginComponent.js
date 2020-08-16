import React, { useState } from "react";
import { auth } from "../fire.js";

export default function LoginComponent() {
  //component can be exported up here

  const [email, setEmail] = useState(""); //the first argument is the name of variable, the second is the function to update variable's state
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e, setter) {
    //this function is called in form below, with different arguments
    setter(e.target.value); //the setter updates the state
  }

  function logIn(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password) //this is handled by Firebase
      .catch((error) => {
        setErrorMessage(error.message); //if there is an error with login, the message part will be rendered on the front end for user to see
      });
  }

  return (
      <>
        <form id="form">
            <h3 className="form-title">Login</h3>
                <label> Email: </label>
                <input
                name="email"
                value={email}
                type="email"
                onChange={(e) => handleChange(e, setEmail)}
                placeholder="Enter your email"
                />
                <label> password: </label>
                <input
                name="password"
                value={password}
                type="password"
                onChange={(e) => handleChange(e, setPassword)}
                placeholder="Enter your password"
                />
                <button type="submit" onClick={logIn}> Log In </button>
            <p>{errorMessage}</p>
        </form>
    </>
  );
}