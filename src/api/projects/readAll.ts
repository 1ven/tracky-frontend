import { updateState } from "redux-api-helpers";
import { Project } from "tracky-types";
import { type } from "core/api";
import { schemas, withSchema } from "core/normalizr";
import { getEntry as getCreate } from "./create";

export default {
  url: "/v1/entities/projects",
  method: "GET",
  mapPayload: {
    success: withSchema([schemas.project])
  },
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
