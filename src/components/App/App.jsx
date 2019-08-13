import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../../themes';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Route path="/" exact />
      </>
    </ThemeProvider>
  );
}

App.displayName = displayName;
