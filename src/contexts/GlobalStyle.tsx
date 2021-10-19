import React from 'react';
import { ThemeType } from './Theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.bg};
    

    &.menu {
      overflow-y: hidden;

      #content > * {
        filter: blur(10px);
      }

    }
  }
`;

export default GlobalStyle;