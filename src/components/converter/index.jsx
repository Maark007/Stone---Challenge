import React, { useState } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/svgs/arrowLeft.svg';
import { ReactComponent as Arrows } from '../../assets/svgs/arrows.svg';
import { Body, TypeOfBuy, Calculated } from './styles';

export default function Converter() {
  const [purchaseType, setPurchaseType] = useState('dinheiro');
  const [isCalculated, setIsCalculated] = useState(false);

  return (
    <Body>
      {!isCalculated ? (
        <>
          <div className="converter-input-container">
            <div className="input-box">
              <span>Dólar</span>
              <input placeholder="?" />
            </div>
            <div className="input-box">
              <span>Taxa do Estado</span>
              <input placeholder="?" />
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
            <button type="button" onClick={() => setIsCalculated(true)}>
              <Arrows height={16} />
              <span>Converter</span>
            </button>
          </TypeOfBuy>
        </>
      ) : (
        <Calculated>
          <button type="button" onClick={() => setIsCalculated(false)}>
            <ArrowLeft height={23} fill="grey" />
            <span>Voltar</span>
          </button>
          <div className="result-container">
            <div className="main-result">
              <h3>O resultado do cálculo é</h3>
              <h1>R$ 240,56</h1>
            </div>
            <div className="iof-cotation">
              <span>
                <strong>Compra no dinheiro e taxa de:</strong>
                5.4%
              </span>
              <span>
                <strong>Cótação do dólar:</strong>
                $1.00 = R$ 5,20
              </span>
            </div>
          </div>
        </Calculated>
      )}
    </Body>
  );
}
