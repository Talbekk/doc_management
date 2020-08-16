import React, { useState } from "react";
import HotelInfoForm from "./HotelInfoForm";

export default function UserPage() {

    const [infoSet, setInfoSet] = useState(false);

  return (
    <div>
        <div>
        <h4>Hotel Information</h4>
        {(infoSet) ? 
        <p>Saved!</p>
        :
        <HotelInfoForm setInfoSet={setInfoSet}/>
        }
        </div>
    </div>
  );
}