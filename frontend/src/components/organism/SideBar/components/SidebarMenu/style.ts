import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  color: #323434;

  /* padding: 5px 10px; */
  border-right: 4px solid transparent;
  transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  justify-content: space-between;

  .menu_item {
    display: flex;
    gap: 10px;
    height: 34px;
    gap: 10px;
    svg {
      background: #fff;
      width: 100%;
      height: 15px;
    }
  }
  .menu_container {
    display: flex;
    flex-direction: column;
  }
  .menu_container .link {
    padding-left: 20px;
    border-bottom: #fff 0.5px solid;
  }
`;
