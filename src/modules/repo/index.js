/**
 * @flow
 */

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createAction, createReducer } from "redux-act";

const push = createAction("push");

export const reducer = createReducer(
  {
    [push]: state => 5
  },
  {}
);

export const selectors = {
  getName: state => state.name
};

export default connect()(({ dispatch }) =>
  <div onClick={() => dispatch(push())}>Repo</div>
);
