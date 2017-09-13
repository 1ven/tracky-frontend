import { getFormValues } from "redux-form";
import getFormState from "./getFormState";

export default (name: string) => getFormValues(name, getFormState);
