import styled from 'styled-components';

interface IHeader {
  color: string;
  isBold: boolean;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export const HeaderH1 = styled.h1<IHeader>`
  color: ${({ color }) => color || 'var(--fourth-yellow)'};
  font-size: 4rem;
  line-height: 1.2;
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: normal;
`;

export const HeaderH2 = styled.h2<IHeader>`
  color: ${({ color }) => color || 'var(--third-yellow)'};
  font-size: 48px;
  line-height: 1.2;
  font-weight: ${({ isBold }) => (isBold ? '900' : '400')};
  letter-spacing: normal;
`;

export const HeaderH3 = styled.h2<IHeader>`
  color: ${({ color }) => color || 'var(--secondary-yellow)'};
  font-size: 20px;
  line-height: 1.2;
  font-weight: ${({ isBold }) => (isBold ? '900' : '400')};
  letter-spacing: normal;
`;
