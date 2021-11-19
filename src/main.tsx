import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './contexts/Theme';
import GlobalStyle from './contexts/GlobalStyle';
import DataContextProvider from './contexts/DataContextProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <DataContextProvider>
        <GlobalStyle />
        <App />
      </DataContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
