import { isNil } from "ramda";
import { updateState } from "redux-api-helpers";
import { Ticket } from "tracky-types";
import { withSchema, schemas } from "core/normalizr";
import { getEntry as getCreate } from "../projects/tickets/create";
import { getEntry as getRemove } from "./remove";
import { type } from "core/api";

export default {
  url: "/v1/entities/tickets",
  method: "GET",
  mapPayload: {
    success: withSchema([schemas.ticket])
  },
  reducer: (state, action) => {
    if (!state[0]) return state;

    switch (action.type) {
      case type(getCreate, "success"):
        return updateState(
          item => ({
            ...item,
            data: [...item.data, action.payload.body]
          }),
          isNil,
          state
        );
      case type(getRemove, "success"):
        return updateState(
          item => ({
            ...item,
            data: item.data.filter(
              id => id !== action.payload.request.params.ticketId
            )
          }),
          isNil,
          state
        );
      default:
        return state;
    }
  }
};

export type Response = Ticket[];

export const getEntry = api => api.tickets.readAll;
