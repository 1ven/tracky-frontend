import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import { reducer as modules } from "../../modules";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default history =>
  createStore(
    combineReducers({
      modules,
      router
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
