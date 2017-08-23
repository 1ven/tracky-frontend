import * as React from "react";
import * as ReactDOM from "react-dom";
import { nest } from "recompose";
import { Provider } from "./core/redux";
import Global from "./components/global";
import Pages from "./components/pages";

export const App = nest(Provider, Global, Pages);

ReactDOM.render(<App />, document.getElementById("root"));
