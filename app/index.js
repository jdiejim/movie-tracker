import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer/AppContainer';
import { rootReducer, history, routerConnected } from './reducers/RootReducer/rootReducer.js';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [routerConnected, thunk];

const store = createStore(
    rootReducer,
    devTools,
    applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
)
