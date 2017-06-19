/**
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";

export default ({ children, history }: Props) =>
  <Provider store={createStore(history)}>{children}</Provider>;

type Props = {
  children: React.Element<*>,
  history: any
};
