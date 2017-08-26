import { combineEpics } from "redux-observable";
import { epic as footerEpic } from "./Footer";

export { default } from "./View";
export const epic = combineEpics(footerEpic);
