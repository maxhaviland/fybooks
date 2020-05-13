import { createGlobalStyle } from 'styled-components';
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: KoHo;
    src: url('https://fonts.googleapis.com/css2?family=KoHo:wght@300&display=swap') format('truetype');
    font-weight: normal;
    font-style: normal;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0 auto;
    padding: 0;
    font-family: 'KoHo', sans-serif;
    color: ${theme.text};
    background: ${theme.background};
  }
  header {
    display: flex; 
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
    font-size: 24px;
    display: flex;
    background-color: ${theme.colors.secondary};
    background-size: 100% 100%;
    color: #fbfbfb
  }
`

export default GlobalStyle;


