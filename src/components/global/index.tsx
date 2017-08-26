import { combineReducers } from "redux";
import { reducer as modalsReducer } from "./Modals";

export const reducer = combineReducers({
  modals: modalsReducer
});

export { default } from "./Provider";
