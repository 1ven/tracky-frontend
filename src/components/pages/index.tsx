import * as React from "react";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { Route, Switch } from "react-router";
import Main, { epic as mainEpic } from "./main";
// paths should be in meta?
const paths = require("./paths");

export const reducer = () => ({});

export default () =>
  <Switch>
    <Route path={paths.main} exact component={Main as any} />
  </Switch>;

export const epic = combineEpics(mainEpic);
