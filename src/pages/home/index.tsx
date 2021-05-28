import React, { useEffect, useState } from 'react';
import { Body } from './styles';
import api from '../../services/api';

import Converter from '../../components/converter';
import Header from '../../components/header';

export default function Home(): JSX.Element {
  const [cotation, setCotation] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get('last/USD-BRL');

        setCotation(Number(response.data.USDBRL.bid));
      } catch {
        alert('Erro na API.');
      }
    }
    loadData();
  }, []);

  return (
    <Body>
      <Header />
      <Converter dolarCotation={Number(cotation.toFixed(2))} />
    </Body>
  );
}
