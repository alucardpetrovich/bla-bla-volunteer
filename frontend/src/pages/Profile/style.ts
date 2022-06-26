import styled from 'styled-components';

export interface IRoleWrapper {
  hover: string;
}

export const RoleWrapper = styled.li<IRoleWrapper>`
  margin-bottom: 30px;
  max-width: 356px;
  border: ${({ color }) => `1px solid ${color}`};
  cursor: pointer;
  :hover,
  :focus {
    border-color: ${({ hover }) => hover};
    color: ${({ hover }) => hover};
  }
`;

export const RoleListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ::after {
    content: '';
    flex: auto;
    max-width: 356px;
  }
`;
