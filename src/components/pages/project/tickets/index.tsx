import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { paths } from "core/router";
import Main from "./main";
import Ticket from "./ticket";

export default () =>
  <Switch>
    <Route path={paths.PROJECT_TICKETS} exact component={Main as any} />
    <Route
      path={paths.PROJECT_TICKETS_TICKET}
      exact
      component={Ticket as any}
    />
  </Switch>;
