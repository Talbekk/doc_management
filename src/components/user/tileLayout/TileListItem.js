import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";

export default function TileListItem({tile, index, handleDeleteTile}){
    
    return (
        <>
        <div>
            <p>{tile.name}</p>
            <p>{tile.description}</p>
            <button onClick={() => handleDeleteTile(index)}>Remove</button>
        </div>
        </>
    )
}