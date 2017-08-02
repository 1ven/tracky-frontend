import { combineReducers } from "swifty";
import repos from "./repos";

export const reducer$ = combineReducers({
  repos: repos.reducer$
});
