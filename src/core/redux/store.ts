import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { createMiddleware as apiMiddleware } from "redux-api-helpers";
import {
  createEpicMiddleware as epicMiddleware,
  combineEpics
} from "redux-observable";
import mostAdapter from "redux-observable-adapter-most";
import { reducer as pagesReducer } from "components/pages/index";
import { reducer as globalReducer } from "components/global";
import { epic as uiEpic, reducer as uiReducer } from "components/index";
import api, { reducer as apiReducer } from "api";
import { reducer as entitiesReducer } from "../normalizr";

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default history =>
  createStore(
    combineReducers({
      entities: entitiesReducer,
      api: apiReducer,
      // TODO: move to ui
      pages: pagesReducer,
      global: globalReducer,
      //
      ui: uiReducer,
      lib: combineReducers({
        form: formReducer,
        router: routerReducer
      })
    }),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        apiMiddleware(api),
        epicMiddleware(combineEpics(uiEpic), {
          adapter: mostAdapter
        })
      )
    )
  );
