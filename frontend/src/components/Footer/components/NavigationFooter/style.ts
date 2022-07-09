import styled from 'styled-components';

export const NavigationFooterList = styled.ul`
  display: flex;
`;

export const NavigationFooterListItem = styled.li`
  a {
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 14px;
    font-weight: 900;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    border-right: solid 1px black;
    padding: 5px 20px;

    :hover {
      color: ${({ theme }) => theme.palette.common.accentBlue};
    }
  }
`;
