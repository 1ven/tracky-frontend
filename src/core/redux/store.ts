import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { createMiddleware as apiMiddleware } from "redux-api-helpers";
import { reducer as modulesReducer } from "modules/index";
import api, { reducer as apiReducer } from "api";

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default history =>
  createStore(
    combineReducers({
      modules: modulesReducer,
      router: routerReducer,
      form: formReducer,
      api: apiReducer
    }),
    composeEnhancers(
      applyMiddleware(routerMiddleware(history), apiMiddleware(api))
    )
  );
