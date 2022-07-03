import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  display: flex;
  z-index: 3;

  .title {
    font-size: 3rem;
    display: grid;
    place-items: center;
  }

  /* Sidebar */
  .sidebar {
    background: #93a9d2;
    color: white;
    height: 100%;
    overflow-y: auto;
  }

  .top_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px 15px 10px;
  }
  .logo {
    font-size: 18px;
    line-height: 0;
  }
  .bars {
    width: 30px;
  }
  .hide {
    display: none;
  }

  .search {
    display: flex;
    align-items: center;
    margin: 10px 0;
    height: 30px;
    padding: 10px;
  }
  .search input {
    border: none;
    margin-left: 10px;
    border-radius: 5px;
    background: rgb(238, 238, 238);

    color: white;
  }

  .routes {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
  }

  .link {
    display: flex;
    color: #323434;
    height: 34px;
    gap: 10px;
    border-right: 4px solid transparent;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);

    svg {
      background: #fff;
      width: 100%;
      height: 15px;
    }
    :nth-child(5) {
      margin-top: 35vh;
    }
  }

  .link:hover {
    color: #93a9d2;
    border-right: 4px solid #fff;
    background: rgb(45, 51, 89);
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .icon {
    width: 64px;
    background: #fff;
    display: flex;
    align-items: center;
  }
  .active {
    border-right: 4px solid #93a9d2;
    background: rgb(45, 51, 89);
    color: #93a9d2;
  }
  .link_text {
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
