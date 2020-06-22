import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  html, body #root {}
  
  *, button, input {
    border: 0;
    outline: 0;
    
    font-family: 'Roboto', sans-serif;
  }
`;