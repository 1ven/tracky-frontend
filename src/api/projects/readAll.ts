import { Project } from "tracky-types";

export default {
  url: "/v1/entities/projects",
  method: "GET"
};

export type Response = Project[];

export const getEntry = api => api.projects.readAll;
