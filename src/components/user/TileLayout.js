import React, { useContext, useState } from "react";
import { AuthContext } from "../../utils/Auth.js";
import TileList from "./tileLayout/TileList";
import AddTileForm from "./tileLayout/AddTileForm";

export default function TileLayout(){

    const { userData } = useContext(AuthContext);

    return (
        <>
        {(userData.tiles) && <TileList/>}
        <p>Enter Layout</p>
        <AddTileForm/>
        </>
    )
}