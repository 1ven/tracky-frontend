import { Ticket } from "tracky-types";
import { withSchema, schemas } from "core/normalizr";
import withTitle from "core/api/withTitle";

export default {
  url: "/v1/entities/projects/:projectId/tickets",
  method: "POST",
  mapPayload: {
    request: withTitle("create a ticket"),
    success: withSchema(schemas.ticket)
  }
};

export type Response = Ticket;
export type Request = {
  title: Ticket["title"];
  description?: Ticket["description"];
};

export const getEntry = api => api.projects.tickets.create;
