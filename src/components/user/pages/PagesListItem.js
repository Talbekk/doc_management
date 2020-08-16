import React, { useContext, useState } from "react";
import { AuthContext } from "../../../utils/Auth.js";
import "../../../App.css";

export default function PagesListItem({page, index, handleDeletePage}){
    
    return (
        <>
             <td>{index + 1}</td>
                <td>{page.title}</td>
                <td>
                    <button onClick={() => handleDeletePage(index)}>Remove</button>
                    <button>Edit</button>
                </td>
        </>
    )
}