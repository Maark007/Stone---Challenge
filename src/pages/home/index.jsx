import React, { useEffect, useState } from 'react';
import { Body } from './styles';
import api from '../../services/api';

import Converter from '../../components/converter';
import Header from '../../components/header';

export default function Home() {
  const [cotation, setCotation] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get('last/USD-BRL');

        setCotation(response.data.USDBRL.bid);
      } catch {
        // eslint-disable-next-line no-alert
        alert('Erro na API.');
      }
    }
    loadData();
  }, []);

  return (
    <Body>
      <Header />
      <Converter dolarCotation={Number(cotation).toFixed(2)} />
    </Body>
  );
}
