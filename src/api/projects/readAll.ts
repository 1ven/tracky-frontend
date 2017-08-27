import { Project } from "tracky-types";
import { type } from "core/api";
import { getEntry as getCreate } from "./create";

export default {
  url: "/v1/entities/projects",
  method: "GET",
  reducer: (state, action) => {
    switch (action.type) {
      case type(getCreate, "success"):
        return {
          ...state,
          data: [...state.data, action.payload.body]
        };
      default:
        return state;
    }
  }
};

export type Response = Project[];

export const getEntry = api => api.projects.readAll;
