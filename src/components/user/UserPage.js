import React, { useState, useContext } from "react";
import HotelInfoForm from "./hotelInfo/HotelInfoForm";
import HotelInfoCard from "./hotelInfo/HotelInfoCard";
import { AuthContext } from "../../utils/Auth.js";

export default function UserPage() {

    const [infoSet, setInfoSet] = useState(false);
    const {userData} = useContext(AuthContext);

  return (
    <div>
        <div>
        <h4>Hotel Information:</h4>
        {(userData.hotelInfo) ? 
        <HotelInfoCard/>
        :
        <HotelInfoForm setInfoSet={setInfoSet}/>
        }
        </div>
    </div>
  );
}