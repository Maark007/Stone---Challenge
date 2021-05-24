import React, { useState } from 'react';
import { mask, unMask } from 'remask';

import { ReactComponent as ArrowLeft } from '../../assets/svgs/arrowLeft.svg';
import { ReactComponent as Arrows } from '../../assets/svgs/arrows.svg';
import { Body, TypeOfBuy, Calculated, Input } from './styles';

export default function Converter({ dolarCotation }) {
  const [error, setError] = useState({ first: false, second: false });
  const [purchaseType, setPurchaseType] = useState('dinheiro');
  const [isCalculated, setIsCalculated] = useState(false);
  const [dolarValue, setDolarValue] = useState(null);
  const [stateTax, setStateTax] = useState(null);
  const [taxText, setTaxtText] = useState('');
  const [result, setResult] = useState(0);

  function percentage(num, per) {
    return (num / 100) * per;
  }

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

  const amountMoneyConversion = () => {
    const withTax = Number(dolarValue) + (Number(dolarValue) / 100) * Number(stateTax);
    const converted = withTax * (Number(dolarCotation) + percentage(Number(dolarCotation), 1.1));
    return setResult(converted.toFixed(2));
  };

  const amountCardConversion = () => {
    const withTax = Number(dolarValue) + (Number(dolarValue) / 100) * Number(stateTax);
    const converted = withTax * (Number(dolarCotation));
    const plusIof = converted + percentage(Number(converted), 6.4);
    return setResult(plusIof.toFixed(2));
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
      amountMoneyConversion();
      setIsCalculated(true);
      setTaxtText('Compra no dinheiro e taxa de:');
    } else {
      amountCardConversion();
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
              />
            </div>
            <div className="input-box">
              <span>Taxa do Estado</span>
              <Input
                onChange={(e) => handleStatetax(e)}
                value={stateTax}
                error={error.second}
                placeholder="00.00 %"
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
                />
                <span>Dinheiro</span>
              </div>
              <div className="radio-input-box">
                <input
                  type="radio"
                  value={purchaseType}
                  checked={purchaseType === 'cartão'}
                  onClick={() => setPurchaseType('cartão')}
                />
                <span>Cartão</span>
              </div>
            </div>
            <button type="button" onClick={submit}>
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
              <h1>{`R$ ${result}`}</h1>
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
