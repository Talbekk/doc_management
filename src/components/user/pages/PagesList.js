import React, { useContext } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import PagesListItem from "./PagesListItem";
import { db } from "../../../fire";
import "../../../App.css"

export default function PagesList(){

    const {userData, currentUser} = useContext(AuthContext);


    function handleDeletePage(index) {

        const pageID = Object.keys(userData.pages)[index];
        db.ref("/users/" + currentUser.uid)
          .child("pages")
          .child(pageID)
          .remove();
      }

    return (
        <div>
            <table>
  <tr>
    <th>#</th>
    <th>Page</th>
    <th>Actions</th>
  </tr>
  { (userData.pages) &&
            Object.values(userData.pages).map((page, index) => {
                return <tr>
                 <PagesListItem page={page} key={index} index={index} handleDeletePage={handleDeletePage}/>
                </tr>
            })
        }
</table>
        </div>
    )
}