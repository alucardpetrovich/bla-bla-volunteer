import { CSSProperties } from 'react';
import styled from 'styled-components';

export type TextTypes = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7';

export interface IText {
  color?: string;
  tag?: TextTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'end' | 'start' | 'justify';
  fontWeight?: string;
  lineHeight?: string;
  href?: string;
  style?: CSSProperties;
}

export const TextB1 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
`;

export const TextB2 = styled(TextB1)<IText>`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
`;

export const TextB3 = styled(TextB1)<IText>`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
`;

export const TextB4 = styled(TextB1)<IText>`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
`;

export const TextB5 = styled(TextB4)<IText>`
  line-height: 1.2;
`;

export const TextB6 = styled(TextB4)<IText>`
  font-size: 10px;
`;

export const TextB7 = styled(TextB1)<IText>`
  font-size: 10px;
  line-height: 1.2;
`;
