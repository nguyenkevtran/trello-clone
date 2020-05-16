import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/api',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'ProximaNova', sans-serif;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyle />
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();