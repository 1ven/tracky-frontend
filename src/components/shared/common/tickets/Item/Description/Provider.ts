import { compose, withProps } from "recompose";
import View from "./View";
import withSubmit from "../withSubmit";

export default compose(
  withProps(({ children }) => ({
    initialValues: {
      description: children
    }
  })),
  withSubmit("description")
)(View) as any;
