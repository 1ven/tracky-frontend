import { combineEpics } from "redux-observable";
import moreEpic from "./More/epic";

export default combineEpics(moreEpic);
