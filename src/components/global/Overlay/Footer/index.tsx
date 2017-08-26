import { combineEpics } from "redux-observable";
import { epic as formEpic } from "./Form";

export { default } from "./Provider";
export const epic = combineEpics(formEpic);
