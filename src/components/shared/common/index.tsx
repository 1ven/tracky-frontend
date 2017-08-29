import { combineEpics } from "redux-observable";
import { epic as ticketsEpic } from "./Tickets";

export const epic = combineEpics(ticketsEpic);
