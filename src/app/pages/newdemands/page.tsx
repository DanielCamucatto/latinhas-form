'use client'
import Form from "@/app/components/Form";
import React from "react";
import { useRouter } from "next/navigation";

const NewDemands = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white rounded-md cursor-pointer"
      >
        Voltar
      </button>
      <Form />
    </div>
  );
};

export default NewDemands;
