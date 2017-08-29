import { combineEpics } from "redux-observable";
import { epic as moreEpic } from "./blocks/More";

export { default as Row } from "./Row";
export { default as NoItems } from "./NoItems";
export { default as Title } from "./blocks/Title";
export { default as More } from "./blocks/More";
export { default as RemoveModal } from "./blocks/More/RemoveModal";

export const epic = combineEpics(moreEpic);
