import React, { useContext } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import { db } from "../../../fire";
import "../../../App.css";
import HotelListItem from "./HotelListItem";

export default function HotelList({users}){

    return (    
        <div>
            <table>
  <tr>
    <th>#</th>
    <th>Hotel Name</th>
    <th>Pages Completed</th>
    <th>Status</th>
    <th>Actions</th>
  </tr>
  {(users) && (users.map((user, index) => {
      return<tr><HotelListItem hotel={user} key={index} index={index}/></tr>
            }))
        }
</table>
        </div>
    )
}