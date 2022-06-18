import styled from 'styled-components';

export interface IRoleWrapper {
  marginBottom: string;
}

export const RoleWrapper = styled.li`
  /* not:last-child & {
    margin-bottom: 20px;
  } */
  margin-bottom: 20px;
  max-width: 356px;
`;

export const RoleListWrapper = styled.ul`
  /* not:last-child & {
    margin-bottom: 20px;
  } */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
`;
