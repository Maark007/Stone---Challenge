import styled from 'styled-components';
import Bg from '../../assets/images/background.png';

export const Body = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
  padding-bottom: 20px;
  @media screen and (max-width: 815px) and (max-height: 560px) {
    background-image: none;
  }
  @media screen and (max-width: 580px) {
    background-image: none;
  }
`;
