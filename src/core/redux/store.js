import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import { reducer as form } from "redux-form";
import { reducer as modules } from "modules/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default history =>
  createStore(
    combineReducers({
      modules,
      router,
      form
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
