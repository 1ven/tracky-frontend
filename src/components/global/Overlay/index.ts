import { combineEpics } from "redux-observable";
import * as actions from "./actions";
import { epic as footerEpic } from "./Footer";
import { epic as sidebarEpic } from "./Sidebar";

export { default } from "./Provider";
export { default as reducer } from "./reducer";
export const epic = combineEpics(footerEpic, sidebarEpic);
export { actions };
