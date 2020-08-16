import React, { useState } from "react";
import { auth, db } from "../fire.js";

export default function RegisterComponent() {
  //component can be exported up here

  const [companyEmail, setCompanyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e, setter) {
    setter(e.target.value);
  }

  function handleFormSubmit(e) {
    // prevent default to make sure the the site are not refreshing
    e.preventDefault();
      auth
        .createUserWithEmailAndPassword(companyEmail, password)
        .then(() => {
          const uid = auth.currentUser.uid;
          db.ref().child("users").child(uid).set({
            companyEmail: companyEmail,
            companyName: companyName,
            isAdmin: false,
            hotelInfo: {},
            tileLayout: [],
            pages: [],
            userId: uid,
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }


  return (
      <>
      <p>Register</p>
        <form id="form" onSubmit={handleFormSubmit}>
            <h3 className="form-title">Login</h3>
                <label> Email: </label>
                <input
                name="email"
                value={companyEmail}
                type="email"
                onChange={(e) => handleChange(e, setCompanyEmail)}
                placeholder="Enter your email"
                required
                />
                <label> password: </label>
                <input
                name="password"
                value={password}
                type="password"
                onChange={(e) => handleChange(e, setPassword)}
                placeholder="Enter your password"
                required
                />
                <label> hotel name: </label>
                <input
                name="company-name"
                value={companyName}
                type="text"
                onChange={(e) => handleChange(e, setCompanyName)}
                placeholder="Enter your password"
                required
                />
                <button type="submit"> Register </button>
            <p>{errorMessage}</p>
        </form>
    </>
  );
}