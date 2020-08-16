import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import "../../../App.css";

export default function TileListItem({tile, index, handleDeleteTile}){
    
    return (
        <div className="tile-list-item">
            <p>{tile.name}</p>
            <p>{tile.description}</p>
            <button onClick={() => handleDeleteTile(index)}>Remove</button>
            <button>Edit</button>
        </div>
    )
}