import api from "api";
import { curry } from "ramda";
import * as helpers from "redux-api-helpers";

const transform = fn =>
  curry((selector, ...args) => fn(selector(api), ...args));

export const request = transform(helpers.request);
export const success = transform(helpers.success);
export const failure = transform(helpers.failure);

export const select = transform(helpers.select);
export const type = transform(helpers.type);
// export const reducer = transform(helpers.reducer);
