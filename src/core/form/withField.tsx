import * as React from "react";
import { Field } from "redux-form";
import { mapProps, compose } from "recompose";
import { prop } from "ramda";

export default compose(
  Component => props => <Field component={Component} {...props} />,
  mapProps(prop("input"))
);
