import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { nest, withProps } from "recompose";
import Root from "./modules";

const App = nest(BrowserRouter, Root);

ReactDOM.render(<App />, document.getElementById("root"));
