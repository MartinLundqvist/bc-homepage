import React from 'react';
import { ThemeType } from './Theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    font-family: 'Miriam Libre', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.bg};
    

    &.menu {
      overflow-y: hidden;
      position: fixed;  

      #content > * {
        filter: blur(10px);
      }

    }
  }
`;

export default GlobalStyle;
