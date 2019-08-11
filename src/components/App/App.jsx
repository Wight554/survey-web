import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route path="/" exact />
    </ThemeProvider>
  );
}

App.displayName = displayName;
