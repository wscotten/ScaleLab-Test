import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './app/';
import './index.css';
import reducers from './app/RootReducer';
import registerServiceWorker from './registerServiceWorker';
import getJSONFromApi from './ApiCommunication';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  /* eslint-disable import/no-extraneous-dependencies, global-require */
  const { logger } = require('redux-logger');
  /* eslint-enable */
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

(async function wait() {
  await getJSONFromApi();
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}());

registerServiceWorker();

export default store;
