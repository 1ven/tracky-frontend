import { Ticket } from "./";

export default {
  url: "/v1/entities/tickets/:id",
  method: "GET"
};

export type Response = Ticket;

export const getEntry = api => api.tickets.read;
