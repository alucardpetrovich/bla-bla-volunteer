import styled from 'styled-components';

type HeaderTypes = 'h1' | 'h2' | 'h3';

export interface IHeader {
  color?: string;
  tag?: HeaderTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: any;
  lineHeight?: any;
  children: any;
}

export const HeaderH1 = styled.h1<IHeader>`
  color: ${({ color }) => color || 'var(--text-dark)'};
  font-size: 56px;
  line-height: 1.2;
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: normal;
`;

export const HeaderH2 = styled.h2<IHeader>`
  color: ${({ color }) => color || 'var(--text-dark)'};
  font-size: 48px;
  line-height: 1.2;
  font-weight: ${({ isBold }) => (isBold ? '900' : '400')};
  letter-spacing: normal;
`;

export const HeaderH3 = styled.h2<IHeader>`
  color: ${({ color }) => color || 'var(--text-dark)'};
  font-size: 20px;
  line-height: 1.2;
  font-weight: ${({ isBold }) => (isBold ? '900' : '400')};
  letter-spacing: normal;
`;
