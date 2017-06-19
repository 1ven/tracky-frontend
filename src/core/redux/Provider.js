/**
 * @flow
 */

import React from "react";
import Redux from "redux";
import { Provider } from "react-redux";
import createStore from "./store";

export default ({ children, reducer }: Props) =>
  <Provider store={createStore(reducer)}>{children}</Provider>;

type Props = {
  children: React.Element<*>,
  reducer: Redux.reducerss
};
