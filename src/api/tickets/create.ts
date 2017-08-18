import { Ticket } from "./";

export default {
  url: "/v1/entities/tickets",
  method: "POST"
};

export type Response = Ticket;
export type Request = {
  title: string;
};

export const getEntry = api => api.tickets.create;
