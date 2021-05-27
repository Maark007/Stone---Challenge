/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components';

export const Body = styled.div`
  padding: 50px 35px 0;
  .converter-input-container {
    display: flex;
  }
  .input-box {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
    span {
      color: rgba(46, 55, 66, 1);
      font-weight: bold;
      font-size: 16.9px;
      margin-bottom: 8px;
    }
  }
  @media screen and (max-width: 580px) {
    padding: 50px 20px;
    .converter-input-container {
      flex-direction: column;
    }
    .input-box {
      margin: 5px 0;
      span {
        margin-bottom: 1px;
      }
    }
  }
`;

export const Input = styled.input`
  border: 1px solid #aaaa;
  padding: 16px;
  height: 46px;
  border-radius: 4px;
  outline: none;
  box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);
  font-weight: bold;
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #f9090982;
    `}
`;

export const TypeOfBuy = styled.div`
  margin-top: 25px;
  h1 {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    color: #2e3742;
  }
  .radio-input-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 1px;
  }
  .radio-input-box {
    display: flex;
    align-items: center;
    margin-right: 17px;
    span {
      color: rgba(46, 55, 66, 1);
      font-weight: bold;
      font-size: 15px;
      margin-left: 6px;
    }
  }
  input[type='radio'] {
    -ms-transform: scale(1.3);
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    cursor: pointer;
    filter: hue-rotate(300deg);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
    background: #8c9cad;
    border: 1px solid #008b57;
    border-radius: 8px;
    width: 130px;
    height: 50px;
    :disabled {
      cursor: default;
      border: none;
      opacity: 0.5;
    }
    span {
      margin-left: 5px;
      color: #fff;
      font-size: 14px;
    }
    svg {
      margin-right: 5px;
    }
  }
`;

export const Calculated = styled.div`
  @keyframes apppearContainer {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: apppearContainer ease-in 0.3s;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 56px;
    padding: 16px;
    border: 1px solid #d7e0eb;
    box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);
    cursor: pointer;
    border-radius: 8px;
    span {
      color: rgba(46, 55, 66, 1);
      font-weight: bold;
      font-size: 14px;
    }
    svg {
      margin-right: 10px;
    }
  }
  .result-container {
    margin-top: 30px;
  }
  .main-result {
    h3 {
      font-size: 17px;
      line-height: 32px;
      color: rgba(69, 80, 94, 1);
      font-weight: bold;
    }
    h1 {
      font-size: 50px;
      color: rgba(0, 171, 99, 1);
      font-weight: bold;
    }
  }
  .iof-cotation {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    span {
      font-weight: 500;
      font-size: 15px;
      line-height: 32px;
      color: #6e7e90;
    }
    strong {
      padding-right: 3px;
    }
  }
`;
