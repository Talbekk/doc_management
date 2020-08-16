import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import { db } from "../../../fire";

export default function AddPageForm(){

    const { currentUser }  = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e, setter) {
        setter(e.target.value);
      }

    function handleFormSubmit(e){
        e.preventDefault();
        db.ref("/users/" + currentUser.uid)
        .child("pages")
        .push(
          {
            title,
            body
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
          <form id="page-form" onSubmit={handleFormSubmit}>
            <label>Page Title:</label>
            <input
                name="hotel-name"
                value={title}
                type="text"
                onChange={(e) => handleChange(e, setTitle)}
                placeholder="Hotel Name"
            />
              <label>Page Content:</label>
            <input
                name="body"
                value={body}
                type="text"
                onChange={(e) => handleChange(e, setBody)}
                placeholder="Enter page content here..."
            />
            <button type="submit">Save</button>
          </form>
          <p>{errorMessage}</p>
        </>
    )
}