import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { nest, withProps } from "recompose";
import { combineReducers } from "swifty";
import { initDevTools } from "swifty-devtools";
import { reducer$ as apiReducer$ } from "./api";
import Root from "./modules";

// avoid this
// should not have global store
const rootReducer$ = combineReducers({
  api: apiReducer$
});
const App = nest(BrowserRouter, Root);

initDevTools(rootReducer$);
ReactDOM.render(<App />, document.getElementById("root"));

// have initStore //(required) function from "swifty", which will accept $rootReducer. This reducer stream
// could also contain initial state
// this inital $rootReducer data should provide data to modules streams$ under the hood of "swifty"
// will control data flow from this function
// throw an error(or just mention in docs), if reducer is not provided, even we can not instantiate it and create reducers just in modules and sync between as a dependencies
