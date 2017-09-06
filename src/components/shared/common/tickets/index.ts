import { combineEpics } from "redux-observable";
import { epic as listEpic } from "./List";
import { epic as itemEpic } from "./Item";

export const epic = combineEpics(listEpic, itemEpic);
