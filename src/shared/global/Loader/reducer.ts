import { path } from "ramda";
import { REMOVE_LOADER } from "./actions";

const initialState = {
  isLoading: false
};

export const getLoading = path(["global", "loader", "isLoading"]);

export default (state = initialState, action) =>
  action.type === REMOVE_LOADER
    ? {
        ...state,
        isLoading: false
      }
    : state;
