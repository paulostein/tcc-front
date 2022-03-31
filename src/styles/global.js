import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    --color-primary: #3b5998;
    --color-secondary: #E48D48;
    --color-white: #FAFAFA;
    --color-dark: #101010;
    --toolbar-height: 65px;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background-color: #EEE;
    color: var(--color-dark);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
