import { createSelector } from "reselect";
import { select } from "./base";

export default getApiEntry =>
  createSelector(
    [select(getApiEntry, "isFetching"), select(getApiEntry, "lastUpdated")],
    (isFetching, lastUpdated) => (!lastUpdated ? true : isFetching)
  );
