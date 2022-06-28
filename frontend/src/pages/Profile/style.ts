import styled from 'styled-components';

export interface IRoleWrapper {
  hover: string;
}

export const RoleWrapper = styled.li<IRoleWrapper>`
  margin-bottom: 30px;
  max-width: 356px;
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
