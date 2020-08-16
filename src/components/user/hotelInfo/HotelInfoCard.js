import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";

export default function HotelInfoCard(){
    const { userData } = useContext(AuthContext);

    return (
        <>
        <h4>{userData.hotelInfo.hotelName}</h4>
        <p>{userData.hotelInfo.address}</p>
        <p>{userData.hotelInfo.email}</p>
        <p>{userData.hotelInfo.number}</p>
        <button>Update</button>
        </>
    )
}