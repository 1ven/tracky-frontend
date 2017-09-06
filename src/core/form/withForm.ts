import { path } from "ramda";
import { reduxForm } from "redux-form";

export default (config?) =>
  reduxForm({
    ...config,
    getFormState: path(["lib", "form"])
  });
