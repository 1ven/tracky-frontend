export default {
  url: "/v1/entities/tickets/:ticketId",
  method: "DELETE",
  history: true
};

export type Response = void;

export const getEntry = api => api.tickets.remove;
