import React, { useEffect, useState } from "react";
import DemandItem from "./DemandsItem";
import { deleteDemand, getDemands, updateDemand } from "../services/api";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

interface Demand {
  id: number;
  title: string;
  description: string;
  deadline: string;
}

const DemandsList = () => {
  const [demands, setDemands] = useState<Demand[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedDemand, setEditedDemand] = useState<Demand | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditDemand = (demand: Demand) => {
    setEditedDemand(demand);
    setIsModalOpen(true);
  };

  function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleEditSubmit = async () => {
    console.log('chamando o submit');

    try {
      if (editedDemand) {
        const formattedDeadline = new Date(editedDemand.deadline).toISOString();

        const requestData = {
          title: editedDemand.title,
          description: editedDemand.description,
          deadline: formattedDeadline,
        };

        const updatedDemand = await updateDemand(editedDemand.id, requestData);

        if (updatedDemand) {
          const updatedDemands = demands.map((demand) =>
            demand.id === updatedDemand.id ? updatedDemand : demand
          );
          setDemands(updatedDemands);
          toast.success('Demanda atualizada com sucesso')
          setIsModalOpen(false); 
        } else {
          console.error("Erro ao atualizar a demanda: DemandsList");
        }
      }
    } catch (error) {
      console.error("Erro ao atualizar a demanda:", error);
    }
  };

  const handleDeleteDemand = async (demandId: number) => {
    try {
      const updateDemands = demands.filter((demand) => Number(demand.id) !== demandId);
      toast.error('Demanda excluida com sucesso')
      setDemands(updateDemands);
    } catch (e) {
      console.error('Erro ao excluir demanda', e);
    }
  };

  useEffect(() => {
    const fetchDemands = async () => {
      try {
        const response = await getDemands();
        setDemands(response);
      } catch (error) {
        console.error("Erro ao buscar as demandas:", error);
      }
    };

    fetchDemands();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Lista de Demandas</h2>
        <div className="flex flex-wrap gap-3">
          {demands.map((demand) => (
            <DemandItem
              key={demand.id}
              title={demand.title}
              description={demand.description}
              deadline={new Date(demand.deadline)}
              onDelete={() => handleDeleteDemand(Number(demand.id))}
              onUpdate={() => handleEditDemand(demand)}
            />
          ))}
        </div>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      >
        <div className="bg-white p-4 rounded-md relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {editedDemand && (
            <form onSubmit={(e) => { e.preventDefault(); handleEditSubmit(); }}>
              <div className="mb-4">
                <label htmlFor="editTitle">Título:</label>
                <input
                  type="text"
                  id="editTitle"
                  value={editedDemand.title}
                  onChange={(e) =>
                    setEditedDemand({
                      ...editedDemand,
                      title: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-2 py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editDescription">Descrição:</label>
                <textarea
                  id="editDescription"
                  value={editedDemand.description}
                  onChange={(e) =>
                    setEditedDemand({
                      ...editedDemand,
                      description: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-2 py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="editDeadline">Prazo:</label>
                <input
                  type="date"
                  id="editDeadline"
                  value={formatDate(editedDemand.deadline)}
                  onChange={(e) =>
                    setEditedDemand({
                      ...editedDemand,
                      deadline: e.target.value,
                    })
                  }
                  className="w-full border rounded-md px-2 py-1"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2"
                >
                  Cancelar
                </button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  Salvar
                </button>
              </div>
            </form>
          )}
        </div>
      </ReactModal>
    </>
  );
};

export default DemandsList;
