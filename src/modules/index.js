/**
 * @flow
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main";
import Repo from "./repo";
import User from "./user";

export default () =>
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/repo" component={Repo} />
    <Route path="/user" component={User} />
  </Switch>;
