import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCalendar } from "@fortawesome/free-solid-svg-icons";


type DemandsItemProps = {
  title: string;
  description: string;
  deadline: Date;
  onDelete: () => void;
  onUpdate: () => void;
};

const DemandItem: React.FC<DemandsItemProps> = ({
  title,
  description,
  deadline,
  onDelete,
  onUpdate,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = () => {
    onDelete();
  };

  const handleUpdate = () => {
    onUpdate();
  };

  return (
    <div
      className={`border p-4 my-2 shadow rounded-md ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-3">
        <div className="p-2">
          <FontAwesomeIcon
            icon={faCalendar}
            size="lg"
            style={{color: "#3498db"}}
          />
        </div>
        <div className="p-2">
          <h3 className="text-xl font-semibold text-gray-500">{title}</h3>
          <p className="mt-2 text-gray-500 text-base">{description}</p>
          <p className="text-gray-500 mt-2 text-sm">
            Prazo: {new Date(deadline).toDateString()}
          </p>
          <div className={`button-container ${isHovered ? "visible" : ""}`}>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white py-2 px-4 mt-4 mr-2 rounded-md hover:opacity-90"
            >
              <FontAwesomeIcon icon={faEdit} /> Editar
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md hover:opacity-90"
            >
              <FontAwesomeIcon icon={faTrash} /> Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandItem;
