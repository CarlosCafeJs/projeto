// src/components/tabelaLicitacoes/tabelacivitacoes.tsx

'use client'; // Diretriz para garantir que o arquivo seja tratado como um componente do lado do cliente

import React, { useEffect, useState } from 'react';

// Tipos das licitações
type Item = {
  number: number;
  deal: string;
  quantity: string;
  tags: string[];
  total: number;
};

type Licitacao = {
  id: string;
  deal: string;
  tags: string[];
  tag_serpro: string[];
  opening: string;
  uf: string;
  city: string;
  total: string;
  company: string;
  uasg: string;
  modprp: string;
  process_number: string;
  address: string;
  phone: string;
  ending: string;
  years: number;
  items: Item[];
  IA: string[];
  Custom: string[];
};

// Componente principal da página de Licitações
const LicitacoesPage = () => {
  const [licitacoes, setLicitacoes] = useState<Licitacao[]>([]); // Estado para armazenar as licitações
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar o carregamento
  const [error, setError] = useState<string | null>(null); // Estado para controlar erros

  useEffect(() => {
    // Função que faz a requisição à API
    const fetchLicitacoes = async () => {
      try {
        const response = await fetch('https://crispy-space-guide-7g7pgj7w555hpg55-3000.app.github.dev/api/teste'); // Requisição à API
        if (!response.ok) {
          throw new Error('Erro ao carregar licitações');
        }
        const data: Licitacao[] = await response.json(); // Parseia os dados JSON
        setLicitacoes(data); // Atualiza o estado com os dados da API
      } catch (err: any) {
        setError(err.message); // Caso haja erro, exibe a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchLicitacoes(); // Chama a função de fetch
  }, []); // O array vazio faz o efeito ser executado apenas uma vez

  // Se estiver carregando, exibe uma mensagem de carregamento
  if (loading) {
    return <div>Carregando...</div>;
  }

  // Se houver um erro, exibe a mensagem de erro
  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Licitacões</h1>
      <TabelaLicitacoes data={licitacoes} /> {/* Passa os dados para a tabela */}
    </div>
  );
};

// Componente da Tabela de Licitações
const TabelaLicitacoes: React.FC<{ data: Licitacao[] }> = ({ data }) => {
  return (
    <div className="p-10 overflow-x-auto shadow-lg border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100  border border-solid border-blue-800">
          <tr className=''>
            <th scope="col" className="px-6 py-3  border border-solid border-blue-800">Codigo</th>
            <th scope="col" className="px-6 py-3  border border-solid border-blue-800">Descrição</th>
            <th scope="col" className="px-6 py-3  border border-solid border-blue-800">PRODUTOS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((licitacao, index) => (
            <tr key={licitacao.id} className="border-b hover:bg-gray-50 p-5 ">
              <td className="px-6 py-4 border-solid  ">{licitacao.id}</td>
              <td className="px-6 py-4 border-solid border-l border-blue-800">{licitacao.deal}</td>

              <td className="px-6 py-4 gap-6 border-l  border-blue-800">
                {licitacao.IA.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="inline-block border border-solid px-2 py-1 m-1 rounded-xl  border-blue-800"
                  >
                    {item} {/* Aqui você pode exibir qualquer propriedade do produto */}
                  </a>
                ))}
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicitacoesPage;
