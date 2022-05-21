import styled from 'styled-components';

interface IText {
  color: string;
  isBold: boolean;
  fontWeight?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export const TextP = styled.p<IText>`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ color }) => color || 'var(--new-moon-D3)'};
  text-align: justify;
  white-space: nowrap;
`;

export const TextLink = styled(TextP)<IText>`
  cursor: pointer;
  color: ${({ color }) => color || 'var(--main-blue)'};
  white-space: nowrap;
`;
