// Estilos globais do portfólio — reset, fontes, scrollbar e seleção de texto
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import das fontes Google */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Jacques+Francois+Shadow&display=swap');

  /* CSS Reset moderno */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  /* Links sem decoração */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Listas sem marcadores */
  ul,
  ol {
    list-style: none;
  }

  /* Imagens responsivas */
  img {
    max-width: 100%;
    display: block;
  }

  /* Seleção de texto estilizada */
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }

  /* Scrollbar customizada (WebKit) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.textHighlight};
  }

  /* Scrollbar para Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.cardBg} ${({ theme }) => theme.colors.background};
  }

  /* Reset de botões e inputs */
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  input,
  textarea {
    font-family: inherit;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
