import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { createDemand } from '../services/api';
import { FormValues } from '../types/types';
import 'tailwindcss/tailwind.css';

const Form = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>();

  const defaultDeadline = new Date('2023-12-31'); // Converta a data padrão em um objeto Date

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);

      // Verifique se data.deadline é uma instância de Date
      let deadlineString =
        data.deadline instanceof Date
          ? data.deadline.toISOString()
          : new Date(data.deadline).toISOString(); // Converta data.deadline em um objeto Date se não for

      if (!deadlineString || !Date.parse(deadlineString)) {
        deadlineString = defaultDeadline.toISOString();
      }

      formData.append('deadline', deadlineString);
      console.log('Dados do formulário:', data);
      reset();

      const resp = await createDemand(formData);
      if (resp) {
        console.log('Demanda cadastrada');
        reset();
      } else {
        console.log('Erro ao cadastrar a demanda');
      }
    } catch (e) {
      console.error('Erro ao cadastrar a demanda', e);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Cadastrar Nova Demanda</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título:
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input type="text" {...field} className="w-full border-gray-300 rounded-md" required />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descrição:
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea {...field} className="w-full border-gray-300 rounded-md" required />
            )}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Prazo:
          </label>
          <Controller
            name="deadline"
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                className="w-full border-gray-300 rounded-md"
                required
                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
              />
            )}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
