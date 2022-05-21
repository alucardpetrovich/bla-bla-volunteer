import styled from 'styled-components';

interface IHeader {
  color: string;
  isBold: boolean;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export const HeaderH1 = styled.h1<IHeader>`
  color: ${({ color }) => color || 'var(--fourth-yellow)'};
  margin: 0;
  font-size: 4rem;
  line-height: 4.5rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: 0.125rem;
`;

export const HeaderH2 = styled.h2<IHeader>`
  color: ${({ color }) => color || 'var(--third-yellow)'};
  margin: 0;
  font-size: 3.625rem;
  line-height: 4.25rem;
  font-weight: ${({ isBold }) => (isBold ? '600' : '400')};
  letter-spacing: 0.12rem;
  padding: 20px 0px;
`;

export const HeaderH3 = styled.h2<IHeader>`
  color: ${({ color }) => color || 'var(--secondary-yellow)'};
  margin: 0;
  font-size: 2.5rem;
  line-height: 3.8rem;
  font-weight: ${({ isBold }) => (isBold ? '600' : '400')};
  letter-spacing: 0.12rem;
  padding: 10px 0px;
`;
