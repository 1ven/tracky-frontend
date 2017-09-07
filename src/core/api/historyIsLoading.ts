import { createSelector } from "reselect";
import { historySelect } from "./base";

export default (getApiEntry, condition) =>
  createSelector(
    [
      historySelect(getApiEntry, "isFetching", condition),
      historySelect(getApiEntry, "lastUpdated", condition)
    ],
    (isFetching, lastUpdated) => (!lastUpdated ? true : isFetching)
  );
