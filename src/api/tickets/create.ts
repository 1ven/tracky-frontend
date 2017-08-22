import { Ticket } from "tracky-types";

export default {
  url: "/v1/entities/tickets",
  method: "POST"
};

export type Response = Ticket;
export type Request = {
  title: Ticket["title"];
  description?: Ticket["description"];
};

export const getEntry = api => api.tickets.create;
