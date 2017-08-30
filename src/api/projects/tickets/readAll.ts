import { Ticket } from "tracky-types";

export default {
  url: "/v1/entities/projects/:projectId/tickets",
  method: "GET"
};

export type Response = Ticket[];

export const getEntry = api => api.projects.tickets.readAll;
