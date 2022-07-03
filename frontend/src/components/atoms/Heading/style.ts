import styled from 'styled-components';

type HeadingTypes = 'h2' | 'h3' | 'h4' | 'h5';

export interface IHeading {
  color?: string;
  tag?: HeadingTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  // FIXME: Ойойой. Пофіксить. без any
  // eslint-disable-next-line
  fontWeight?: any;
  // eslint-disable-next-line
  lineHeight?: any;
  // eslint-disable-next-line
  children: any;
  // eslint-disable-next-line
  style?: any;
  onClick?: () => void;
}

export const HeadingH2 = styled.h2<IHeading>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: normal;
`;

export const HeadingH3 = styled.h3<IHeading>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: normal;
`;

export const HeadingH4 = styled.h4<IHeading>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: normal;
`;

export const HeadingH5 = styled.h5<IHeading>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: normal;
`;
