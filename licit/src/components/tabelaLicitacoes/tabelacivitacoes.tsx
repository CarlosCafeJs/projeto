import React from 'react';

interface TableProps {
  data: { name: string; age: number; country: string }[]; // Define o tipo de dados
}

const TabelaLicitacoes: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto shadow-lg border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Idade
            </th>
            <th scope="col" className="px-6 py-3">
              País
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4">{row.age}</td>
              <td className="px-6 py-4">{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaLicitacoes;
