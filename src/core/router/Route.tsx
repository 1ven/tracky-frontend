import * as React from "react";
import { Route } from "react-router-dom";

export default ({ path, exact, component }: Props) =>
  <Route path={path} exact={exact} component={component} />;

export type Props = {
  path: string;
  exact: boolean;
  component: any;
};
