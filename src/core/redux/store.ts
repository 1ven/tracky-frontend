import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { createMiddleware as apiMiddleware } from "redux-api-helpers";
import {
  createEpicMiddleware as epicMiddleware,
  combineEpics
} from "redux-observable";
import mostAdapter from "redux-observable-adapter-most";
import {
  reducer as pagesReducer,
  epic as pagesEpic
} from "components/pages/index";
import {
  reducer as globalReducer,
  epic as globalEpic
} from "components/global";
import api, { reducer as apiReducer } from "api";

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default history =>
  createStore(
    combineReducers({
      api: apiReducer,
      pages: pagesReducer,
      global: globalReducer,
      lib: combineReducers({
        form: formReducer,
        router: routerReducer
      })
    }),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        apiMiddleware(api),
        epicMiddleware(combineEpics(pagesEpic, globalEpic), {
          adapter: mostAdapter
        })
      )
    )
  );
