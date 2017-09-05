import { path, mergeDeepRight } from "ramda";
import { combineReducers } from "redux";

const makeEntityReducer = (name: string) => (state = {}, { payload }: any) =>
  path(["entities"], payload) && payload.entities[name]
    ? mergeDeepRight(state, payload.entities[name])
    : state;

export default combineReducers({
  tickets: makeEntityReducer("tickets"),
  projects: makeEntityReducer("projects")
});
