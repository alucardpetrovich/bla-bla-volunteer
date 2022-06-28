import styled from 'styled-components';

export interface IRoleCard {
  id: string;
  title: string;
  textAlign?: 'left' | 'center' | 'right' | 'end' | 'start' | 'justify';
  children?: string | React.ReactElement;
}

export interface ICardStyled {
  color?: string;
  hover?: string;
  onClick?(role: string): void;
  isActive?: boolean;
}

export interface ISeparator {
  color?: string;
  hover?: string;
}

export const CardStyled = styled.div<ICardStyled>`
  padding: 20px 10px;
  opacity: 0.7;
  color: ${({ color }) => color};
  border: ${({ color }) => `1px solid ${color}`};
  cursor: pointer;
  :hover,
  :focus {
    border-color: ${({ hover }) => hover};
    color: ${({ hover }) => hover};
  }
`;

export const Separator = styled.div<ISeparator>`
  border-bottom: ${({ color }) => `1px solid ${color}`};
  margin-bottom: 20px;

  ${CardStyled}:hover & {
    border-color: ${({ hover }) => hover};
  }
`;
