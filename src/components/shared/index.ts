import { combineEpics } from "redux-observable";
import { epic as commonEpic } from "./common";

export const epic = combineEpics(commonEpic);
