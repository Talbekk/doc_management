import React, { useContext, useState } from "react";
import { AuthContext } from "../../utils/Auth.js";
import PagesList from "./pages/PagesList";
import AddPageForm from "./pages/AddPageForm";

export default function Pages(){

    const { userData } = useContext(AuthContext);

    return (
        <>
            <AddPageForm/>
            {/* {(userData.pages) && <PagesList/>} */}
            <p>Test</p>
        </>
    )
}