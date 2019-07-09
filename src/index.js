import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";

import App from "./App";
import reducer from './reducers'
import { saga } from './saga';
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
