import * as React from "react";
import { Route, Switch } from "core/router";
import Main from "./main";
const paths = require("./paths");

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main} />
  </Switch>;
