import { Project } from "tracky-types";
import { schemas, withSchema } from "core/normalizr";

export default {
  url: "/v1/entities/projects",
  method: "POST",
  mapPayload: {
    success: withSchema(schemas.project)
  }
};

export type Response = Project;

export const getEntry = api => api.projects.create;
