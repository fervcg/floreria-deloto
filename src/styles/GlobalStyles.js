// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  p {
    font-family: 'Jost';
    color: #3B3B3B;
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-family: 'Bitter', serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;      /* ← agrega la manito a los enlaces */
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  :root {
    --pink: #F472B6;
    --dark-pink: #EC4899;
    --soft-gray: #F9FAFB;
    --dark-gray: #6B7280;
  }
`;

export default GlobalStyles;