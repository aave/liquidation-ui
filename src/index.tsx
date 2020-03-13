import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { getApolloClient } from './apollo';
import { ThemeProvider } from 'libs/theme-provider';
import { Web3Provider } from './web3-data-provider';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { LanguageProvider } from 'libs/language-provider';

import globalStyle from './globalStyle';

ReactDOM.render(
  <div className="Main">
    <Router>
      <ApolloProvider client={getApolloClient()}>
        <LanguageProvider>
          <ThemeProvider>
            <Web3Provider>
              <App />
            </Web3Provider>
          </ThemeProvider>
        </LanguageProvider>
      </ApolloProvider>
    </Router>

    <style jsx={true} global={true}>
      {globalStyle}
    </style>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
