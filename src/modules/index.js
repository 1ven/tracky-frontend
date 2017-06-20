/**
 * @flow
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { combineReducers } from "redux";
import Main from "./main";
import Repo, { reducer as repo } from "./repo";
import User, { reducer as user } from "./user";
import paths from "./paths";

export const reducer = combineReducers({ repo, user });

export default () =>
  <Switch>
    <Route path={paths.index} exact component={Main} />
    <Route path={paths.repo} component={Repo} />
    <Route path={paths.user} component={User} />
  </Switch>;
