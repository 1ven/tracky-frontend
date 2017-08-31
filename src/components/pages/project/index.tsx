import * as React from "react";
import { nest } from "recompose";
import { Route, Switch, Redirect } from "react-router-dom";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Wrap from "./View";
import Tickets from "./tickets";

const ticketsLink = replaceParams(paths.PROJECT_TICKETS);

export default nest(Wrap, ({ match }) =>
  <Switch>
    <Redirect exact from={paths.PROJECT} to={ticketsLink(match.params)} />
    <Route path={paths.PROJECT_TICKETS} component={Tickets as any} />
  </Switch>
);
