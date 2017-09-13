import { reduxForm } from "redux-form";
import getFormState from "./getFormState";

export default (config?) =>
  reduxForm({
    ...config,
    getFormState
  });
