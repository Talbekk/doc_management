import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../utils/Auth.js";
import { db } from "../../fire";
import HotelList from "./hotelList/HotelList";
import HotelView from "./hotelList/HotelView";
import "../../App.css";

export default function AdminPage() {

    const [userLists, setUserLists] = useState([]);
    const { userData } = useContext(AuthContext);
  
    function fetchUsers() {
      db.ref()
        .child("users")
        .once(
          "value",
          (snapshot) => {
            const usersObjects = snapshot.val();
            if (usersObjects) {
              setUserLists(Object.values(usersObjects));
            }
          },
          (error) => console.error(error)
        );
    }
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    function getUsersExcludedMe() {
      return userLists.filter(
        (user) => user.companyEmail !== userData.companyEmail
      );
    }

  return (
    <>
       {(userData != null) &&(
        <div className="admin-view">
            <div className="trackers">
                <HotelView users={getUsersExcludedMe()}/>
            </div>
            <h4>Hotel List:</h4>
            <HotelList users={getUsersExcludedMe()}/>
        </div>
        )}
    </>
  )
}