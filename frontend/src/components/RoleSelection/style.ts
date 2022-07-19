import styled from 'styled-components';

export const RoleListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  ::after {
    content: '';
    flex: auto;
    max-width: 356px;
  }
`;
