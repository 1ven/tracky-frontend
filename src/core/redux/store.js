import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (reducer, middlewares) =>
  createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));
