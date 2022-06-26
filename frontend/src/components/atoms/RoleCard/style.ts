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
  onClick?(role: string): any;
}

export const CardStyled = styled.div<ICardStyled>`
  padding: 20px 10px;
  opacity: 0.7;
  color: ${({ color }) => color};
`;
