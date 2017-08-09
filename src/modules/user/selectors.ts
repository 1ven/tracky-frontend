import { reduce, map, prop, compose, filter } from "ramda";
import { createSelector } from "reselect";
import { selector as reposSelector } from "api/repos";
import { safe } from "core/redux";
import { select } from "core/api";
import { Maybe } from "ramda-fantasy";

const reposApi = select(reposSelector);

// TODO: keep generic selectors in api/repos
// keep UI specific selectors in corresponding module, ex "user"

export const getReposNames = createSelector(
  [safe(reposApi("data"))],
  Maybe.maybe([], map(prop("name")))
);
