/**
 * @flow
 */

import React from "react";
import ReactDOM from "react-dom";
import { nest } from "recompose";
import Router from "./core/router";
import Root from "./modules";

const App = nest(Router, Root);

ReactDOM.render(<App />, document.getElementById("root"));
