import * as React from "react";
import * as ReactDOM from "react-dom";
import { nest } from "recompose";
import { Provider } from "./core/redux";
import Root from "./modules";

const App = nest(Provider, Root);

ReactDOM.render(<App />, document.getElementById("root"));
