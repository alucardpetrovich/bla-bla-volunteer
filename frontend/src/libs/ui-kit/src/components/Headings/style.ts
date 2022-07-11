import React from 'react';
import styled from 'styled-components';

type HeadingTypes = 'h2' | 'h3' | 'h4' | 'h5';

export interface IHeading {
  color?: string;
  tag: HeadingTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  lineHeight?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Heading = styled.h1<IHeading>`
  color: ${({ theme, color }) => (color ? color : theme.palette.common.black)};
  font-family: 'Inter';
  line-height: 1.2;
  letter-spacing: normal;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const HeadingH2 = styled(Heading)`
  font-size: 48px;
  font-weight: 700;
`;

export const HeadingH3 = styled(Heading)`
  font-size: 24px;
  font-weight: 700;
`;

export const HeadingH4 = styled(Heading)`
  font-size: 20px;
  font-weight: 900;
`;

export const HeadingH5 = styled(Heading)`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 900;
`;
