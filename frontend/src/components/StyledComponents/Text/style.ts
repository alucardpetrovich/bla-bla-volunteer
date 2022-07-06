import React from 'react';
import styled from 'styled-components';

type TextTypes = 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'b7';

export interface IText {
  color?: string;
  tag?: TextTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'end' | 'start' | 'justify';
  fontWeight?: string;
  lineHeight?: string;
  href?: string;
  style?: React.CSSProperties;
}

export const TextB1 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  // FIXME: Шо це? Нема такого. Поки коментую. Не знаю що тут мало бути хто робив треба поправить https://developer.mozilla.org/ru/docs/Web/CSS/white-space
  //white-space: wrap;
`;

export const TextB2 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  // FIXME: Шо це? Нема такого. Поки коментую. Не знаю що тут мало бути хто робив треба поправить https://developer.mozilla.org/ru/docs/Web/CSS/white-space
  //white-space: wrap;
`;

export const TextB3 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  // FIXME: Шо це? Нема такого. Поки коментую. Не знаю що тут мало бути хто робив треба поправить https://developer.mozilla.org/ru/docs/Web/CSS/white-space
  //white-space: wrap;
`;

export const TextB4 = styled.p<IText>`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
`;

export const TextB5 = styled.p<IText>`
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  // FIXME: Шо це? Нема такого. Поки коментую. Не знаю що тут мало бути хто робив треба поправить https://developer.mozilla.org/ru/docs/Web/CSS/white-space
  //white-space: wrap;
`;

export const TextB6 = styled.p<IText>`
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  // FIXME: Шо це? Нема такого. Поки коментую. Не знаю що тут мало бути хто робив треба поправить https://developer.mozilla.org/ru/docs/Web/CSS/white-space
  //white-space: wrap;
`;

export const TextB7 = styled.p<IText>`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'justify')};
  // FIXME: Шо це? Нема такого. Поки коментую. Не знаю що тут мало бути хто робив треба поправить https://developer.mozilla.org/ru/docs/Web/CSS/white-space
  //white-space: wrap;
`;
