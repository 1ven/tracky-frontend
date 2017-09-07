import api from "api";
import * as helpers from "redux-api-helpers";

const transform = fn => (getApiEntry, ...args) => fn(getApiEntry(api), ...args);

export const request = transform(helpers.request);
export const success = transform(helpers.success);
export const failure = transform(helpers.failure);

export const select = transform(helpers.select);
export const historySelect = transform(helpers.historySelect);
export const type = transform(helpers.type);
