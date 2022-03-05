import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
