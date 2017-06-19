/**
 * @flow
 */

import React from "react";
import ReactDOM from "react-dom";
import { nest, withProps } from "recompose";
import { combineReducers } from "redux";
import { Router } from "./core/router";
import { Provider } from "./core/redux";
import Root, { reducer as modules } from "./modules";

const App = nest(
  Router,
  withProps({ reducer: combineReducers({ modules }) })(Provider),
  Root
);

ReactDOM.render(<App />, document.getElementById("root"));
