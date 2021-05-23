import React from 'react';
import { Body } from './styles';

import Converter from '../../components/converter';
import Header from '../../components/header';

export default function Home() {
  return (
    <Body>
      <Header />
      <Converter />
    </Body>
  );
}
