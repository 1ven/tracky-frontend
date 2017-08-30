export default {
  url: "/v1/entities/tickets/:ticketId",
  method: "DELETE"
};

export type Response = void;

export const getEntry = api => api.tickets.remove;
