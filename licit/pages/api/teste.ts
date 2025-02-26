// pages/api/Licitacaos.ts

import type { NextApiRequest, NextApiResponse } from 'next'

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

type ResponseData = Licitacao[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Dados estáticos de licitações
  const Licitacaos: Licitacao[] = [
    {
      id: '/!licitacao/54654',
      deal: 'Objeto: Pregão Eletrônico - Teste (SES-DF).',
      tags: ['Certificação', 'Cloud'],
      tag_serpro: [],
      opening: '2010-10-10',
      uf: 'DF',
      city: 'Brasília',
      total: '0',
      company: 'GOVERNO DO DISTRITO FEDERAL',
      uasg: '555552s',
      modprp: '5',
      process_number: '558885588s',
      address: 'Praça do Buriti, Edf. Anexo do Pal. do Buriti, 5º Teste - BRASÍLIA (DF)',
      phone: '',
      ending: '2025-02-17T00:00:00',
      years: 3,
      items: [
        {
          number: 1,
          deal: 'Emissão de Certificado Digital TST, Teste',
          quantity: '50',
          tags: ['certificado', 'cloud'],
          total: 0
        }
      ],
      IA: ['datavalid', 'biovalid', 'Consulta CPF','datavalid', 'biovalid', 'Consulta CPF'],
      Custom: ['datavalid', 'biovalid', 'Consulta CPF']
    }
  ];

  // Retorna os dados no formato JSON com status 200
  res.status(200).json(Licitacaos);
}
