import { combineReducers } from "redux";
import { mapObjIndexed } from "ramda";
import { SHOW, HIDE } from "./actions";
import * as names from "./names";

export const isEditing = (state, props) =>
  state.ui.shared.kit.inlineEdit[props.name].isEditing;

const createReducer = (name: string) => (
  state = { isEditing: false },
  action
) => {
  switch (action.type) {
    case SHOW + name:
      return {
        ...state,
        isEditing: true
      };
    case HIDE + name:
      return {
        ...state,
        isEditing: false
      };
    default:
      return state;
  }
};

export default combineReducers(
  mapObjIndexed((_, key) => createReducer(key), names)
);
