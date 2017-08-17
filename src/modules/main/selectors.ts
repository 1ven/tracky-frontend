import { map, prop } from "ramda";
import { createSelector } from "reselect";
import { getEntry as getReposEntry } from "api/repos";
import { safe } from "core/redux";
import { select } from "core/api";
import { Maybe } from "ramda-fantasy";

export const getReposNames = createSelector(
  [safe(select(getReposEntry, "data"))],
  Maybe.maybe([], map(prop("name")))
);
