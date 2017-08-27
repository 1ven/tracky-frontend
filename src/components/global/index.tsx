import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { reducer as modalsReducer } from "./Modals";
import { reducer as overlayReducer } from "./Overlay";
import { epic as overlayEpic } from "./Overlay";

export { default } from "./Provider";

export const reducer = combineReducers({
  modals: modalsReducer,
  overlay: overlayReducer
});

export const epic = combineEpics(overlayEpic);
