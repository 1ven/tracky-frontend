import { combineEpics } from "redux-observable";
import { epic as footerEpic } from "./Footer";
import { epic as headerEpic } from "./Header";

export { default } from "./View";
export const epic = combineEpics(footerEpic, headerEpic);
