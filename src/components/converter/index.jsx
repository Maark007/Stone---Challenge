import React, { useState } from 'react';
import { mask, unMask } from 'remask';

import { ReactComponent as ArrowLeft } from '../../assets/svgs/arrowLeft.svg';
import { ReactComponent as Arrows } from '../../assets/svgs/arrows.svg';
import { Body, TypeOfBuy, Calculated, Input } from './styles';
import {
  cardConversion,
  moneyConversion
} from '../../utils/conversionCalculations';

export default function Converter({ dolarCotation }) {
  const [error, setError] = useState({ first: false, second: false });
  const [purchaseType, setPurchaseType] = useState('dinheiro');
  const [isCalculated, setIsCalculated] = useState(false);
  const [dolarValue, setDolarValue] = useState(undefined);
  const [stateTax, setStateTax] = useState(undefined);
  const [taxText, setTaxtText] = useState('');
  const [result, setResult] = useState(0);

  const handleStatetax = (event) => {
    const array = ['9', '99', '9.99', '99.99'];
    const originalValue = unMask(event.target.value);
    const maskedValue = mask(originalValue, array);
    setStateTax(maskedValue);
  };

  const handleValue = (event) => {
    const array = ['9', '99.99', '999.99', '9999.99'];
    const originalValue = unMask(event.target.value);
    const maskedValue = mask(originalValue, array);
    setDolarValue(maskedValue);
  };

  const submit = () => {
    if (!dolarValue && !stateTax) {
      return setError({ first: true, second: true });
    }
    if (!dolarValue) {
      return setError({ first: true, second: false });
    }
    if (!stateTax) {
      return setError({ first: false, second: true });
    }

    if (purchaseType === 'dinheiro') {
      setResult(
        moneyConversion(
          Number(dolarValue),
          Number(stateTax),
          Number(dolarCotation)
        )
      );
      setIsCalculated(true);
      setTaxtText('Compra no dinheiro e taxa de:');
    } else {
      setResult(
        cardConversion(
          Number(dolarValue),
          Number(stateTax),
          Number(dolarCotation)
        )
      );
      setIsCalculated(true);
      setTaxtText('Compra no cartão e taxa de:');
    }
  };

  const returnConversion = () => {
    setIsCalculated(false);
    setStateTax(null);
    setDolarValue(null);
    setResult(null);
    setError({ first: false, second: false });
  };

  return (
    <Body>
      {!isCalculated ? (
        <>
          <div className="converter-input-container">
            <div className="input-box">
              <span>Dólar</span>
              <Input
                onChange={(e) => handleValue(e)}
                value={dolarValue}
                error={error.first}
                placeholder="$ 00.00"
                aria-label="dolar-input"
              />
            </div>
            <div className="input-box">
              <span>Taxa do Estado</span>
              <Input
                onChange={(e) => handleStatetax(e)}
                value={stateTax}
                error={error.second}
                placeholder="00.00 %"
                aria-label="tax-input"
              />
            </div>
          </div>
          <TypeOfBuy>
            <h1>Tipo de compra</h1>
            <div className="radio-input-container">
              <div className="radio-input-box">
                <input
                  type="radio"
                  value={purchaseType}
                  checked={purchaseType === 'dinheiro'}
                  onClick={() => setPurchaseType('dinheiro')}
                  onChange={() => {}}
                />
                <span>Dinheiro</span>
              </div>
              <div className="radio-input-box">
                <input
                  type="radio"
                  value={purchaseType}
                  checked={purchaseType === 'cartão'}
                  onClick={() => setPurchaseType('cartão')}
                  onChange={() => {}}
                />
                <span>Cartão</span>
              </div>
            </div>
            <button
              type="button"
              aria-label="button"
              onClick={submit}
              disabled={!stateTax && !dolarValue}
            >
              <Arrows height={16} />
              <span>Converter</span>
            </button>
          </TypeOfBuy>
        </>
      ) : (
        <Calculated>
          <button type="button" onClick={returnConversion}>
            <ArrowLeft height={23} fill="grey" />
            <span>Voltar</span>
          </button>
          <div className="result-container">
            <div className="main-result">
              <h3>O resultado do cálculo é</h3>
              <h1 aria-label="result-box">{`R$ ${result}`}</h1>
            </div>
            <div className="iof-cotation">
              <span>
                <strong>{taxText}</strong>
                {purchaseType === 'dinheiro' ? '1,1%' : '6.4%'}
              </span>
              <span>
                <strong>Cótação do dólar:</strong>
                $1.00 = R$
                {dolarCotation}
              </span>
            </div>
          </div>
        </Calculated>
      )}
    </Body>
  );
}
