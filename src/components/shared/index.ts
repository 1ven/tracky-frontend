import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { epic as commonEpic } from "./common";
import { reducer as kitReducer } from "./kit";

export const epic = combineEpics(commonEpic);
export const reducer = combineReducers({
  kit: kitReducer
});
