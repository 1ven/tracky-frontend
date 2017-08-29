import { Ticket } from "tracky-types";
import { getEntry as getCreate } from "../projects/tickets/create";
import { getEntry as getRemove } from "./remove";
import { type } from "core/api";

export default {
  url: "/v1/entities/tickets",
  method: "GET",
  reducer: (state, action) => {
    if (!state.data) return state;

    switch (action.type) {
      case type(getCreate, "success"):
        return {
          ...state,
          data: [...state.data, action.payload.body]
        };
      case type(getRemove, "success"):
        return {
          ...state,
          data: state.data.filter(
            ({ id }) => id !== action.payload.request.params.id
          )
        };
      default:
        return state;
    }
  }
};

export type Response = Ticket[];

export const getEntry = api => api.tickets.readAll;
