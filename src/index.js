import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/app';
import reducers from './reducers';
require('./style.scss');

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);

// Alternative way to plug in middleware
// const store = createStore(reducers, applyMiddleware(ReduxThunk, logger));

//store={store}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
