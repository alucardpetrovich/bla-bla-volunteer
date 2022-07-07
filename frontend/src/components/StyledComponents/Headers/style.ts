import React from 'react';
import styled from 'styled-components';

type HeaderTypes = 'h2' | 'h3' | 'h4' | 'h5';

export interface IHeader {
  color?: string;
  tag?: HeaderTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  lineHeight?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const HeaderH2 = styled.h2<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  font-family: 'Inter';
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: normal;
`;

export const HeaderH3 = styled.h3<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  font-family: 'Inter';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: normal;
`;

export const HeaderH4 = styled.h4<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: normal;
`;

export const HeaderH5 = styled.h5<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: normal;
`;
