import styled from 'styled-components';

export const NetworksWrapper = styled.ul`
  display: flex;

  img {
    width: 24px;
    height: 24px;
    margin-right: 24px;
    cursor: pointer;

    :hover {
      transform: scale(1.2);
      transition: 0.5 ease-in-out;
    }
  }
`;
