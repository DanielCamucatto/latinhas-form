import React from "react";
import { useRouter } from "next/navigation";

const DemandsCreateButton = () => {
    const router = useRouter(); 
    const handleCreateDemand = () => {
        router.push('/pages/newdemands')
    }

    return (
        <button onClick={handleCreateDemand} className="bg-blue-500 text-white py-2 px-4 mt-4 mr-4 self-end">
            Criar Demanda
        </button>
    );
};

export default DemandsCreateButton;
