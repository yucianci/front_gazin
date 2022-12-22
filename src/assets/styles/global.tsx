import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

export const theme = createTheme(ptBR);

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    font-family: 'Poppins', sans-serif;
    color: #dbdbdb;
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
    filter: contrast(1.1);
  }

  /* DEFAULT STYLES MATERIAL UI*/
  .MuiTableCell-root {
    color: #dbdbdb !important;
    background: #313131;
    border-bottom: 1px solid #444444 !important;
  }
  .MuiTableCell-head {
    font-weight: 600 !important;
    background-color: #383838;
    svg {
      font-size: 1.4rem;
      transform: translate(5px, 6px);
    }
    :hover {
      cursor: pointer; 
    }
  }
  .MuiPaginationItem-root {
    color: #dbdbdb !important;
  }
  .MuiPaper-root {
    background: #242424 !important;
  }
  .MuiInputBase-root {
    color: #dbdbdb !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #383838 !important;
  }
  .MuiFormControl-root.MuiTextField-root {
    width: 100%;
  }
  .MuiGrid-root.MuiGrid-item{
    padding-bottom: 16px;
  }
  .MuiAutocomplete-endAdornment button svg {
    color: #717171;
  }
  .MuiAutocomplete-listbox li {
    color: #717171 !important;
  }
  .swal2-actions {
    display: flex;
    width: 100%;
    margin: 50px 0 0;
    justify-content: space-evenly;

    .swal2-cancel {
      background: transparent;
      border: 1px solid #bdbdbd;
    }

    .swal2-confirm {
      background: #226e3565;
      border: 1px solid #226e35;

      :focus {
        box-shadow: 0 0 0 3px #226e35
      }
    }
  }
`;
