import * as React from "react";
import { combineEpics } from "redux-observable";
import { nest } from "recompose";
import { Route, Switch, Redirect } from "react-router-dom";
import { paths } from "core/router";
import Wrap from "./View";
import Tickets, { epic as ticketsEpic } from "./tickets";

export const epic = combineEpics(ticketsEpic);

export default nest(Wrap, () =>
  <Switch>
    <Redirect exact from={paths.MY} to={paths.MY_TICKETS} />
    <Route exact path={paths.MY_TICKETS} component={Tickets as any} />
  </Switch>
);
