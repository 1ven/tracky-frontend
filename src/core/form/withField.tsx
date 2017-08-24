import * as React from "react";
import { Field } from "redux-form";
import { mapProps, compose } from "recompose";

export default compose(
  Component => props => <Field component={Component} {...props} />,
  mapProps((props: any) => ({
    // Prob, it's a bug, need to provide just "props.input"
    ...props,
    ...props.input
  }))
) as any;
