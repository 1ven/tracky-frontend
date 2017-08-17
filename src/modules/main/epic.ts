import { F } from "ramda";
import { type } from "core/api";

export default action$ => {
  return action$.tap(({ type }) => console.log(type)).filter(F);
};
