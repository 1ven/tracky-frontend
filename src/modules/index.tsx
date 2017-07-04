import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
const paths = require("./paths");

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main} />
  </Switch>;
