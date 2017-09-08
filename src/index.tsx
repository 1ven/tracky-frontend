import "core/global";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { nest } from "recompose";
import { Provider } from "./core/redux";
import Global from "./components/global";
import Pages from "./components/pages";

if (process.env.NODE_ENV !== "production") {
  let createClass = React.createClass;
  Object.defineProperty(React, "createClass", {
    set: nextCreateClass => {
      createClass = nextCreateClass;
    }
  });
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

export const App = nest(Provider, Global, Pages);

ReactDOM.render(<App />, document.getElementById("root"));
