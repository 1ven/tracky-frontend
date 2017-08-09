import { createSelector } from "reselect";
import { curry } from "ramda";
import * as helpers from "redux-api-helpers";
import api from "api";

const transform = fn =>
  curry((apiSelector, ...args) => fn(apiSelector(api), ...args));

export const request = transform(helpers.request);
export const success = transform(helpers.success);
export const failure = transform(helpers.failure);

export const select = transform(helpers.select);
export const type = transform(helpers.type);
// export const reducer = transform(helpers.reducer);

export const isLoading = apiSelector =>
  createSelector(
    [select(apiSelector, "isFetching"), select(apiSelector, "lastUpdated")],
    (isFetching: boolean, lastUpdated?: number) => !lastUpdated || isFetching
  );
