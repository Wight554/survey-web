import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../../themes';
import MasterPage from '../pages/MasterPage';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Route
          path="/"
          exact
          component={() => (
            <>
              <MasterPage pageTitle="SomeText" isLogged={false}>
                <span>Some shit</span>
              </MasterPage>
              <GlobalStyle />
            </>
          )}
        />
      </>
    </ThemeProvider>
  );
}

App.displayName = displayName;
