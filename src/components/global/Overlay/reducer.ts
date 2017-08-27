import { path } from "ramda";
import { TOGGLE_SIDEBAR } from "./actions";

const initialState = {
  isSidebarVisible: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible
      };
    default:
      return state;
  }
};

export const isSidebarVisible = path(["global", "overlay", "isSidebarVisible"]);
