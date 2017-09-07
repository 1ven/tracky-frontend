import { compose, withProps, withState, withHandlers } from "recompose";
import { connect } from "core/redux";
import View from "./View";
import withSubmit from "../withSubmit";

export default compose(
  withProps(({ children }) => ({
    initialValues: {
      title: children
    }
  })),
  withSubmit("title")
)(View) as any;
