import { schema } from "normalizr";

export const project = new schema.Entity("projects");
export const ticket = new schema.Entity("tickets", {
  project: project
});
