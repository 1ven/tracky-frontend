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

export const historyIsLoading = (getApiEntry, condition) =>
  createSelector(
    [
      historySelect(getApiEntry, "isFetching", condition),
      historySelect(getApiEntry, "lastUpdated", condition)
    ],
    selectLoading
  );

export const isLoading = getApiEntry =>
  createSelector(
    [select(getApiEntry, "isFetching"), select(getApiEntry, "lastUpdated")],
    selectLoading
  );

const selectLoading = (isFetching, lastUpdated) =>
  !lastUpdated ? true : isFetching;
