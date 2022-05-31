import styled from 'styled-components';

type TextTypes = 'text' | 'link';

export interface IText {
  color?: string;
  tag?: TextTypes;
  isBold?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: any;
  lineHeight?: any;
  children: any;
  href?: string;
}

export const TextP = styled.p<IText>`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme, color }) => (color ? color : theme.palette.text.primary)};
  text-align: justify;
  white-space: wrap;
`;

export const TextLink = styled(TextP)<IText>`
  cursor: pointer;
  color: ${({ color }) => color || 'var(--main-blue)'};
  white-space: nowrap;
`;
