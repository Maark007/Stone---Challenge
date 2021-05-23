import React, { useEffect, useState } from 'react';

import { ReactComponent as StoneCurrency } from '../../assets/svgs/stoneCurrency.svg';
import { currentDate } from '../../utils/currentDate';
import { Body } from './styles';

export default function Header() {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(currentDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Body>
      <div className="header-box">
        <StoneCurrency height={70} />
        <div className="header-hour-box">
          <h3>{date}</h3>
          <span>Dados de câmbio disponibilizados pela Morningstar</span>
        </div>
      </div>
    </Body>
  );
}
