/**
 * @flow
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { combineReducers } from "redux";
import Main from "./main";
import Repo, { reducer as repo } from "./repo";
import User, { reducer as user } from "./user";

export const reducer = combineReducers({ repo, user });

export default () =>
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/repo" component={Repo} />
    <Route path="/user" component={User} />
  </Switch>;
