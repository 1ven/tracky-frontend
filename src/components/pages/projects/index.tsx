import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { paths } from "./meta";
import Item from "./item";

export { paths } from "./meta";

export default () =>
  <Switch>
    <Route path={paths.item} exact component={Item as any} />
  </Switch>;
