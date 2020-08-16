import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import TileListItem from "./TileListItem";
import { db } from "../../../fire";

export default function TileList(){

    const {userData, currentUser} = useContext(AuthContext);


    function handleDeleteTile(index) {

        const tileID = Object.keys(userData.tiles)[index];
        db.ref("/users/" + currentUser.uid)
          .child("tiles")
          .child(tileID)
          .remove();
      }

    return (
        <>
        { (userData.tiles) &&
            Object.values(userData.tiles).map((tile, index) => {
                return <TileListItem tile={tile} key={index} index={index} handleDeleteTile={handleDeleteTile}/>
            })
        }
        </>
    )
}