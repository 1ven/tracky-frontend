import { path } from "ramda";
import { SHOW_MODAL, HIDE_MODAL } from "./actions";

export default (state = [], action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return [...state, action.payload];
    case HIDE_MODAL:
      return state.filter(m => m.name !== action.payload.name);
    default:
      return state;
  }
};

export const getModals = path(["global", "modals"]);
