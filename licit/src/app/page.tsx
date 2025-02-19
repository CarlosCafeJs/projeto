
import React from "react";
import BarraMenu from "../components/barraMenu/barraMenu";
import TabelaLicitacoes from "../components/tabelaLicitacoes/tabelacivitacoes";




// Declarando a função como React.FC (Function Component)
const Home: React.FC = () => {
  const tableData = [
    { name: 'João', age: 30, country: 'Brasil' },
    { name: 'Maria', age: 25, country: 'Portugal' },
    { name: 'Carlos', age: 35, country: 'Argentina' },
    { name: 'Ana', age: 28, country: 'Brasil' },
  ];

  return (
    <div className="">
      <BarraMenu />
      <TabelaLicitacoes data={tableData} />
      ola
    </div>
  );
}

export default Home;
