import { createSelector } from "reselect";
import { curry } from "ramda";
import * as helpers from "redux-api-helpers";
import api from "api";

const transform = fn =>
  curry((getApiEntry, ...args) => fn(getApiEntry(api), ...args));

export const request = transform(helpers.request);
export const success = transform(helpers.success);
export const failure = transform(helpers.failure);

export const select = transform(helpers.select);
export const type = transform(helpers.type);
// export const reducer = transform(helpers.reducer);
