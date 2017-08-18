export default {
  url: "/v1/entities/tickets/:id",
  method: "DELETE"
};

export type Response = void;

export const getEntry = api => api.tickets.remove;
