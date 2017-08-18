import { Ticket } from "./";

export default {
  url: "/v1/entities/tickets/:id",
  method: "POST"
};

export type Response = Ticket;

export const getEntry = api => api.tickets.update;
