import React, { useEffect, useState } from "react";
import DemandItem from "./DemandsItem";
import { getDemands } from "../services/api";
import { Demand } from "../types/types"; 

const DemandsList = () => {
  const [demands, setDemands] = useState<Demand[]>([]); // Defina o tipo como Demand[]

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
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lista de Demandas</h2>
      {demands.map((demand) => (
        <DemandItem
          key={demand.id}
          title={demand.title}
          description={demand.description}
          deadline={new Date(demand.deadline)}
          onDelete={() => {console.log('exclua a demada')}}
          onUpdate={() => {console.log('edite a demanda')}}
        />
      ))}
    </div>
  );
};

export default DemandsList;
