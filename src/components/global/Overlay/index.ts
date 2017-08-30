import { combineEpics } from "redux-observable";
import { epic as footerEpic } from "./Footer";
import { epic as sidebarEpic } from "./Sidebar";

export { default } from "./View";
export const epic = combineEpics(footerEpic, sidebarEpic);
