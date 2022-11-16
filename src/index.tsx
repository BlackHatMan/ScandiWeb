import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import { store, persistor } from './data/store';
import Theme from './HOC/Theme';
import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Theme>
              <App />
            </Theme>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
