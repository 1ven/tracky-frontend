import * as React from "react";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { Route, Switch } from "react-router-dom";
import { paths } from "core/router";
import Main, { epic as mainEpic } from "./main";
import Project, { epic as projectEpic } from "./project";

export const reducer = () => ({});

export default () =>
  <Switch>
    <Route path={paths.MAIN} exact component={Main as any} />
    <Route path={paths.PROJECT} exact component={Project as any} />
  </Switch>;

export const epic = combineEpics(mainEpic, projectEpic);
