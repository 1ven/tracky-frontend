import { Ticket } from "tracky-types";

export default {
  url: "/v1/entities/tickets/:id",
  method: "GET"
};

export type Response = Ticket;

export const getEntry = api => api.tickets.read;
