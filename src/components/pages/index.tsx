import * as React from "react";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { Route, Switch, Redirect } from "react-router-dom";
import { paths } from "core/router";
import My, { epic as myEpic } from "./my";
import Project from "./project";

export const reducer = () => ({});

export const epic = combineEpics(myEpic);

export default () =>
  <Switch>
    <Redirect exact from={paths.MAIN} to={paths.MY} />
    <Route path={paths.MY} component={My as any} />
    <Route path={paths.PROJECT} component={Project as any} />
  </Switch>;
