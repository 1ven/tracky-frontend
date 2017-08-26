import { combineEpics } from "redux-observable";
import { epic as modalEpic } from "./Modal";

export { default } from "./Provider";
export const epic = combineEpics(modalEpic);
