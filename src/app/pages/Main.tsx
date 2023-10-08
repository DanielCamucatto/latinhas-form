import React from "react";
import DemandsList from "../components/DemandsList";
import DemandsCreateButton from "../components/DemandsCreateButton";

const Main = () => {
    return (
        <>
            <DemandsCreateButton />
            <DemandsList />
        </>
    )
}

export default Main