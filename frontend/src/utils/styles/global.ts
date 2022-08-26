import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
    background: ${p => p.theme.palette.common.white};
    color: ${p => p.theme.palette.common.black};
  }

  * {
    box-sizing: border-box;

    &:after {
      box-sizing: border-box;
    }

    &:before {
      box-sizing: border-box;
    }

    .grecaptcha-badge {
      z-index: 1000;
      @media (max-width: 833px) and (min-width: 0px) {
        margin-bottom: 7.8rem;
      }
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    transition: all .3s;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    transition: all .3s;
  }

  button:hover {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  input:focus,
  input:active,
  button:active,
  button:focus {
    outline: none;
  }

  button, a {
    transition: all 0.3s;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

`;

export default GlobalStyle;
