import styled from 'styled-components';

export const NavigationFooterWrapper = styled.ul`
  display: flex;

  li {
    a {
      color: var(--text-dark);
      font-size: 14px;
      font-weight: 900;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: center;
      padding: 5px 20px;

      :hover {
        color: var(--accent-blue);
      }
    }
    border-right: solid 1px black;

    :last-child {
      border-right: solid 1px transparent;
    }
  }
`;
