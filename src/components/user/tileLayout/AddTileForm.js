import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import { db } from "../../../fire";

export default function AddTileForm(){

    const { currentUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    function handleClick(e){
        e.preventDefault();
        db.ref("/users/" + currentUser.uid)
        .child("tiles")
        .push(
          {
           name: "Test Tile",
           description: "This is a test."
          },
          () => {
           
          }
        )
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }

    return (
        <>
            <button onClick={handleClick}>Add Tile</button>
            <p>{errorMessage}</p>
        </>
    )
}