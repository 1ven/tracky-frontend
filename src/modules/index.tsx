import * as React from "react";
import { Route, Switch } from "core/router";
import Main from "./main";
import User from "./user";
const paths = require("./paths");

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main} />
    <Route path={paths.user + "/:name"} component={User} />
  </Switch>;
