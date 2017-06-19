/**
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";

export default ({ children, reducer, middlewares }: Props) =>
  <Provider store={createStore(reducer, middlewares)}>{children}</Provider>;

type Props = {
  children: React.Element<*>,
  reducer: any,
  middlewares: any
};
