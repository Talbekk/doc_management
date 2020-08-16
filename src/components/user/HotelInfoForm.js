import React, { useContext, useState } from "react";
import { AuthContext } from "../../utils/Auth.js";
import { db } from "../../fire";

export default function HotelInfo({setInfoSet}) {

    const { currentUser } = useContext(AuthContext);
    const { userData } = useContext(AuthContext);

    const [hotelName, setHotelName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("+44");
    const [errorMessage, setErrorMessage] = ("");

    function handleChange(e, setter) {
        //this function is called in form below, with different arguments
        setter(e.target.value); //the setter updates the state
      }
    
    function handleFormSubmit(e){

        e.preventDefault();
          db.ref("/users/" + currentUser.uid)
            .child("hotelInfo")
            .set(
              {
                hotelName,
                address,
                email,
                number
              },
              () => {
                setInfoSet(true);
              }
            )
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }

    return (
        <div>
          <form id="form" onSubmit={handleFormSubmit}>
            <label>Hotel Name:</label>
            <input
                name="hotel-name"
                value={hotelName}
                type="text"
                onChange={(e) => handleChange(e, setHotelName)}
                placeholder="Hotel Name"
            />
              <label>Hotel Address:</label>
            <input
                name="address"
                value={address}
                type="text"
                onChange={(e) => handleChange(e, setAddress)}
                placeholder="address"
            />
            <label>Hotel Email:</label>
            <input
                name="email"
                value={email}
                type="email"
                onChange={(e) => handleChange(e, setEmail)}
                placeholder="Hotel email"
            />
            <label>Hotel Phone Number:</label>
            <input
                name="number"
                value={number}
                type="text"
                onChange={(e) => handleChange(e, setNumber)}
                placeholder="Hotel Contact Number"
            />
            <button type="submit">Save</button>
          </form>
          <p>{errorMessage}</p>
        </div>
    );
}





