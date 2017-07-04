import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { nest, withProps } from "recompose";
import Root from "./modules";

const withHistory = withProps({ history: createHistory() });

ReactDOM.render(<Root />, document.getElementById("root"));
