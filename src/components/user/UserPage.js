import React, { useState, useContext } from "react";
import HotelInfoForm from "./hotelInfo/HotelInfoForm";
import HotelInfoCard from "./hotelInfo/HotelInfoCard";
import TileLayout from "./TileLayout";
import Pages from "./Pages";
import { AuthContext } from "../../utils/Auth.js";

export default function UserPage() {

    const {userData} = useContext(AuthContext);

  return (
    <div>
       {(userData != null) &&(
         <div>
        <div className="hotel-info">
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
        <div>
      <h4>Pages:</h4>
      {(userData.pages) && <p>{Object.keys(userData.pages).length} / 5</p>}
          <Pages/>
        </div>
        <div>
          {(userData.pages) && ((Object.keys(userData.pages).length >= 5) && <button>Submit</button>)}
        </div>
        </div>)}
    </div>
  );
}