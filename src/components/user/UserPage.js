import React, { useState, useContext } from "react";
import HotelInfoForm from "./hotelInfo/HotelInfoForm";
import HotelInfoCard from "./hotelInfo/HotelInfoCard";
import TileLayout from "./TileLayout";
import { AuthContext } from "../../utils/Auth.js";

export default function UserPage() {

    const {userData} = useContext(AuthContext);

  return (
    <div>
        <div>
        <h4>Hotel Information:</h4>
        {(userData.hotelInfo) ? 
        <HotelInfoCard/>
        :
        <HotelInfoForm/>
        }
        </div>
        <div>
          <h4>Tile Layout</h4>
          <TileLayout/>
        </div>
    </div>
  );
}