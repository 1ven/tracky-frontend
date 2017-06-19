/**
 * @flow
 */

import React from "react";
import { connect } from "react-redux";
import { createAction, createReducer } from "redux-act";

const push = createAction("push");

export const reducer = createReducer(
  {
    [push]: state => 2
  },
  {}
);

export default connect()(({ dispatch }) =>
  <div onClick={() => dispatch(push())}>User</div>
);
