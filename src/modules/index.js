import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import paths from "./paths";

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main} />
  </Switch>;
