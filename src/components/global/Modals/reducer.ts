import { path } from "ramda";
import { SHOW_MODAL, HIDE_MODAL } from "./actions";

export default (state = [], action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return [...state, action.payload.name];
    case HIDE_MODAL:
      return state.filter(name => name !== action.payload.name);
    default:
      return state;
  }
};

export const getModals = path(["global", "modals"]);
