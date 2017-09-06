import { combineReducers } from "redux";
import { reducer as inlineEditReducer } from "./InlineEdit";

export const reducer = combineReducers({
  inlineEdit: inlineEditReducer
});
