import { combineEpics } from "redux-observable";
import { epic as ticketsEpic } from "./tickets";

export const epic = combineEpics(ticketsEpic);
