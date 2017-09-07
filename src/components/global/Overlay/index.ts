import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { epic as footerEpic, reducer as footerReducer } from "./Footer";
import { epic as headerEpic } from "./Header";

export { default } from "./View";

export const epic = combineEpics(footerEpic, headerEpic);
export const reducer = combineReducers({
  footer: footerReducer
});
