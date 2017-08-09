import * as React from "react";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { Route, Switch } from "react-router";
import Main from "./main";
import User, { epic as userEpic, reducer as userReducer } from "./user";
const paths = require("./paths");

export const reducer = combineReducers({
  user: userReducer
});

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main as any} />
    <Route path={paths.user + "/:name"} component={User as any} />
  </Switch>;

export const epic = combineEpics(userEpic);
