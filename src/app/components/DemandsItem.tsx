import React from "react";

type DemandsItemProps = {
    title: string; 
    description: string; 
    deadline: Date; 
    onDelete: () => void; 
    onUpdate: () => void;
}

const DemandItem: React.FC<DemandsItemProps> = ({title, description, deadline, onDelete, onUpdate}) => {
    
    const handleDelete = () => {
        onDelete()
    }

    const handleUpdate = () => {
        onUpdate()
    }

    return(
        <div className="border p-4 my-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
            <p className="text-gray-500 mt-2">Prazo: {new Date(deadline).toDateString()}</p>
            <button onClick={handleUpdate} className="bg-blue-500 text-white py-2 px-4 mt-4 mr-2">Editar</button>
            <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 mt-4">Excluir</button>
        </div>
    ); 
}

export default DemandItem;