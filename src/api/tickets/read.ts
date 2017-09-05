import { Ticket } from "tracky-types";
import { schemas, withSchema } from "core/normalizr";

export default {
  url: "/v1/entities/tickets/:ticketId",
  method: "GET",
  mapPayload: {
    success: withSchema(schemas.ticket)
  }
};

export type Response = Ticket;

export const getEntry = api => api.tickets.read;
