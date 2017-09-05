import { createSelector } from "reselect";
import * as helpers from "redux-api-helpers";
import api from "api";

const transform = fn => (getApiEntry, ...args) => fn(getApiEntry(api), ...args);

export const request = transform(helpers.request);
export const success = transform(helpers.success);
export const failure = transform(helpers.failure);

export const select = transform(helpers.select);
export const historySelect = transform(helpers.historySelect);
export const type = transform(helpers.type);
// export const reducer = transform(helpers.reducer);

export const isLoading = (getApiEntry, condition) =>
  createSelector(
    [
      select(getApiEntry, "isFetching", condition),
      select(getApiEntry, "lastUpdated", condition)
    ],
    (isFetching, lastUpdated) => (!lastUpdated ? true : isFetching)
  );
