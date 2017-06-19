/**
 * @flow
 */

import { BrowserRouter } from "react-router-dom";
import React from "react";

export default ({ children }: Props) =>
  <BrowserRouter>{children}</BrowserRouter>;

type Props = {
  children: React.Element<*>
};
