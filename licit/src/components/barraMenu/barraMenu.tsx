import React from 'react';

import imglogo from '../../../public/logo.svg'
const BarraMenu: React.FC = () => {
  return (
    <div>
      <ul className='min-w-3xs m-5 p-10 flex justify-between mx-32 h-12 items-center gap-10 bg-gray-500'>
        <ul className='flex gap-10 mx-8 w-96'>
          <li><img src={imglogo} alt="logo" /></li>
          <li>Inicio</li>
          <li>Dashboard</li>
        </ul>
        <li>Pesquisa</li>
        <li>Sair</li>
      </ul>
    </div>
  );
}

export default BarraMenu;
