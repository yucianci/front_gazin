import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    font-family: 'Poppins', sans-serif;
    color: #ecf0f1;
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    height: 100%;
  }
  *:focus {
    outline: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  tbody > tr:hover {
    cursor: pointer;
    filter: brightness(1.15);
  }

  /* DEFAULT STYLES MATERIAL UI*/
  .MuiTableCell-root {
    color: #fff !important;
    background: #313131;
    border-bottom: 1px solid #444444 !important;
  }
  .MuiTableCell-head {
    font-weight: 600 !important;
    background-color: #414141;
  }
`;
