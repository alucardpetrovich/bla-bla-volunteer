import { CardStyled } from './../../atoms/RoleCard/style';
import styled from 'styled-components';

type HeaderTypes = 'h2' | 'h3' | 'h4' | 'h5';

export interface IHeader {
  color?: string;
  shouldHovered?: boolean;
  tag?: HeaderTypes;
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
}

export const HeaderH2 = styled.h2<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: normal;
`;

export const HeaderH3 = styled.h3<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: normal;
`;

export const HeaderH4 = styled.h4<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 20px;
  line-height: 1.2;
  font-weight: 900;
  letter-spacing: normal;

  ${CardStyled}:hover & {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const HeaderH5 = styled.h5<IHeader>`
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: normal;
`;
