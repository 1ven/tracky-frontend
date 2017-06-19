/**
 * @flow
 */

import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { nest, withProps } from "recompose";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "./core/redux";
import Root from "./modules";

const withHistory = withProps({ history: createHistory() });

const App = nest(withHistory(Provider), withHistory(ConnectedRouter), Root);

ReactDOM.render(<App />, document.getElementById("root"));
