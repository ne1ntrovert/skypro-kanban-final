import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  html,
  body {
    margin: 0;
    font-family: "Roboto", Arial, sans-serif;
  }

  body {
    min-width: 320px;
    background: ${({ theme }) => theme.pageBg};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s, color 0.2s;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
