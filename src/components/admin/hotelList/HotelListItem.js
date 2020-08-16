import React from "react";
import "../../../App.css";

export default function HotelListItem({hotel, index}){
    
    return (
        <>
             <td>{index + 1}</td>
                <td>{hotel.hotelInfo.hotelName}</td>
                <td>{(Object.keys(hotel.pages).length > 0) ? Object.keys(hotel.pages).length : 0 }</td>
                <td>{(Object.keys(hotel.pages).length >= 5) ? "Awaiting Confirmation" : "Gathering Content"}</td>
                <td>
                    <button>Email/Nudge</button>
                    <button>Edit</button>
                    <button>Approve</button>
                    <button>Request Changes</button>
                </td>
        </>
    )
}