import { Ticket } from "tracky-types";
import { schemas, withSchema } from "core/normalizr";
import withTitle from "core/api/withTitle";

export default {
  url: "/v1/entities/tickets/:ticketId",
  method: "PATCH",
  history: true,
  mapPayload: {
    request: withTitle("update a ticket"),
    success: withSchema(schemas.ticket)
  }
};

export type Response = Ticket;

export const getEntry = api => api.tickets.update;
