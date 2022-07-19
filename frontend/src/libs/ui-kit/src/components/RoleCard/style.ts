import styled from 'styled-components';

export interface ICardStyled {
  color?: string;
  hover?: string;
  onClick?(role: string): void;
  isActive?: boolean;
}

export interface ICardWrapper {
  hover: string | undefined;
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

export const CardWrapper = styled.li<ICardWrapper>`
  margin-bottom: 30px;
  max-width: 356px;
  display: flex;

  :hover,
  :focus {
    color: ${({ hover }) => hover};
    border-color: ${({ hover }) => hover};
  }
`;

export const Separator = styled.div<ISeparator>`
  border-bottom: ${({ color }) => `1px solid ${color}`};
  margin-bottom: 20px;

  ${CardStyled}:hover & {
    border-color: ${({ hover }) => hover};
  }
`;
