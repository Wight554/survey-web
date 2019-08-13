import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../../themes';
import Login from '../pages/Login';
import Register from '../pages/Register';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </>
    </ThemeProvider>
  );
}

App.displayName = displayName;
