import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { FormValues } from '../types/types';
import 'tailwindcss/tailwind.css';

const Form = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Dados do formulário:', data);
    reset();
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
            defaultValue={undefined}
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