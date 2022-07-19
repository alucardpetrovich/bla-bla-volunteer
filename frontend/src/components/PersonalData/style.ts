import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ::after {
    content: '';
    flex: auto;
    min-width: 300px;
  }
`;
