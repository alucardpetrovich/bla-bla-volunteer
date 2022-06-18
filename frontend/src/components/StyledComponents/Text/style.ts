import { CardStyled } from './../../atoms/RoleCard/style';
import styled from 'styled-components';

type TextTypes = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7';

export interface IText {
  color?: string;
  tag?: TextTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'end' | 'start' | 'justify';
  fontWeight?: any;
  lineHeight?: any;
  children: any;
  href?: string;
  style?: any;
}

export const TextB1 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;
`;

export const TextB2 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;
`;

export const TextB3 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;
`;

export const TextB4 = styled.p<IText>`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;
`;

export const TextB5 = styled.p<IText>`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;

  ${CardStyled}:hover & {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const TextB6 = styled.p<IText>`
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;
`;

export const TextB7 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  white-space: wrap;
`;
