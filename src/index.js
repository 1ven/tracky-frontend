/**
 * @flow
 */

import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { nest, withProps } from "recompose";
import { combineReducers } from "redux";
import {
  Router,
  reducer as router,
  createRouterMiddleware
} from "./core/router";
import { Provider } from "./core/redux";
import Root, { reducer as modules } from "./modules";

const history = createHistory();

const App = nest(
  withProps({
    middlewares: [createRouterMiddleware(history)],
    reducer: combineReducers({ modules, router })
  })(Provider),
  withProps({ history })(Router),
  Root
);

ReactDOM.render(<App />, document.getElementById("root"));
