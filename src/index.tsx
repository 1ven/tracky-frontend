import * as React from "react";
import * as ReactDOM from "react-dom";
import { nest } from "recompose";
import { Provider } from "./core/redux";
import Global from "./shared/global";
import Pages from "./pages";

export const App = nest(Provider, Global, Pages);

ReactDOM.render(<App />, document.getElementById("root"));
