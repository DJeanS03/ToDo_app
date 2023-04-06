import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body {
    min-height: 100vh;
    background: ${(props) => props.theme['color-background']};
    color: ${(props) => props.theme['text-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    transition:  0.5s;
  }

  input {
    outline: none;
  }

  .icons, button {
    cursor: pointer;
  }



`