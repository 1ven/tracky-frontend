import { F } from "ramda";
import { selector as reposSelector } from "api/repos";
import { type } from "core/api";

export default action$ => {
  return action$.tap(x => console.log(x)).filter(F);
};
