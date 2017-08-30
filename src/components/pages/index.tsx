import * as React from "react";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { Route, Switch, Redirect } from "react-router-dom";
import { paths } from "core/router";
import Me, { epic as meEpic } from "./me";
import Project from "./project";

export const reducer = () => ({});

export const epic = combineEpics(meEpic);

export default () =>
  <Switch>
    <Redirect exact from={paths.MAIN} to={paths.ME} />
    <Route path={paths.ME} component={Me as any} />
    <Route path={paths.PROJECT} component={Project as any} />
  </Switch>;
