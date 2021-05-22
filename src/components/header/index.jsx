import React from 'react';

import { ReactComponent as StoneCurrency } from '../../assets/svgs/stoneCurrency.svg';
import { currentDate } from '../../utils/currentDate';
import { Body } from './styles';

export default function Header() {
  return (
    <Body>
      <div className="header-box">
        <StoneCurrency height={70} />
        <div className="header-hour-box">
          <h3>{currentDate()}</h3>
          <span>Dados de câmbio disponibilizados pela Morningstar</span>
        </div>
      </div>
    </Body>
  );
}
