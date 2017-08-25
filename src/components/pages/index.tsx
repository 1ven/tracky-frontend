import * as React from "react";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { Route, Switch } from "react-router-dom";
import { paths } from "./meta";
import Main, { epic as mainEpic } from "./main";
import Projects from "./projects";

export const reducer = () => ({});

export { paths } from "./meta";

export default () =>
  <Switch>
    <Route path={paths.main} exact component={Main as any} />
    <Route path={paths.projects} component={Projects as any} />
  </Switch>;

export const epic = combineEpics(mainEpic);
