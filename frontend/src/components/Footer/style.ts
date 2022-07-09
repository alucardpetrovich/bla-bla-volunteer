import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    width: 100%;
    height: 18px;
    font-family: 'Nokora';
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #93a9d2;
  }
`;

export const FooterLogo = styled.img`
  width: 60px;
  height: 20px;
`;
