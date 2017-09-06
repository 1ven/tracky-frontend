import { isNil } from "ramda";
import { updateState } from "redux-api-helpers";
import { Project } from "tracky-types";
import { type } from "core/api";
import { schemas, withSchema } from "core/normalizr";
import { getEntry as getCreate } from "./create";

export default {
  url: "/v1/entities/projects",
  method: "GET",
  history: true,
  mapPayload: {
    success: withSchema([schemas.project])
  },
  reducer: (state, action) => {
    switch (action.type) {
      case type(getCreate, "success"):
        return updateState(
          item => ({
            ...item,
            data: [...item.data, action.payload.body]
          }),
          isNil,
          state
        );
      default:
        return state;
    }
  }
};

export type Response = Project[];

export const getEntry = api => api.projects.readAll;
