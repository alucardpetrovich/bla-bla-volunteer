import styled, { useTheme } from 'styled-components';

export interface ICardStyled {
  color: string;
  hover: string;
}

export const CardStyled = styled.div<ICardStyled>`
  padding: 20px 10px;
  opacity: 0.7;
  cursor: pointer;
  border: ${({ color }) => `1px solid ${color}`};
  &:hover,
  &:focus {
    border-color: ${({ hover }) => hover};
    color: ${({ hover }) => hover};
  }
`;
