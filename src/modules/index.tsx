import * as React from "react";
import { Route, Switch } from "react-router";
import Main from "./main";
import User from "./user";
const paths = require("./paths");

export const reducer = (state = {}, action) => state;

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main as any} />
    <Route path={paths.user + "/:name"} component={User as any} />
  </Switch>;
