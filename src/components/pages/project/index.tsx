import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Tickets, { epic } from "./tickets";

const ticketsLink = replaceParams(paths.PROJECT_TICKETS);

export default ({ match }) =>
  <Switch>
    <Redirect exact from={paths.PROJECT} to={ticketsLink(match.params)} />
    <Route path={paths.PROJECT_TICKETS} component={Tickets as any} />
  </Switch>;

export { epic };
