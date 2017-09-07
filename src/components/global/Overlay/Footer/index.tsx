import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { reducer as messagesReducer, epic as messagesEpic } from "./Messages";
import { epic as modalEpic } from "./Modal";

export { default } from "./Provider";
export { default as Modal } from "./Modal";

export const epic = combineEpics(modalEpic, messagesEpic);
export const reducer = combineReducers({
  messages: messagesReducer
});
