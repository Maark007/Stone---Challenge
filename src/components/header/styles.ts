import styled from 'styled-components';

export const Body = styled.header`
  width: 100%;
  padding: 20px 25px;
  .header-box {
    display: flex;
    align-items: center;
  }
  .header-hour-box {
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    h3 {
      color: rgba(69, 80, 94, 1);
      font-weight: bold;
      font-size: 18px;
    }
    span {
      color: rgba(140, 156, 173, 1);
      font-size: 14px;
      font-weight: 500;
      padding-top: 3px;
    }
  }
  @media screen and (max-width: 580px) {
    padding: 20px 10px;
    .header-box {
      flex-direction: column;
    }
    .header-hour-box {
      align-items: center;
      margin: 20px 0 0;
      h3,
      span {
        text-align: center;
      }
    }
  }
`;
