import { Ticket } from "tracky-types";

export default {
  url: "/v1/entities/tickets/:ticketId",
  method: "POST"
};

export type Response = Ticket;

export const getEntry = api => api.tickets.update;
