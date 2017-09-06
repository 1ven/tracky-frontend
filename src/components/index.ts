import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { reducer as sharedReducer, epic as sharedEpic } from "./shared";
import { epic as globalEpic } from "./global";
import { epic as pagesEpic } from "./pages";

export const reducer = combineReducers({
  shared: sharedReducer
});

export const epic = combineEpics(sharedEpic, globalEpic, pagesEpic);
