import React from "react";
import "../../../App.css";

export default function HotelView({users}){

    function getHotelsReadyToBeBuilt(){
       let counter = 0;

        users.forEach((hotel) => {
            if(Object.keys(hotel.pages).length >= 5){
                counter += 1;
            }
        })
        return counter;
    }

    function getHotelsInProgress(){
        let counter = 0;
 
         users.forEach((hotel) => {
             if(Object.keys(hotel.pages).length < 5){
                 counter += 1;
             }
         })
         return counter;
     }

    return (    
  <>
    <div className="data-entry">
    <p>Total Hotels Tracked: {users.length}</p>
    </div>
    <div className="data-entry">
    <p>Ready To Be Built: {getHotelsReadyToBeBuilt()}</p>
    </div>
    <div className="data-entry">
    <p>Still Waiting On Content: {getHotelsInProgress()}</p>
    </div>
  </>
    )
}