import api from "api";
import { curry } from "ramda";
import * as shelf from "";

const transform = fn => selector => curry(fn(selector(api)));

export const request = transform(shelf.request);
export const success = transform(shelf.success);
export const failure = transform(shelf.failure);

export const select = transform(shelf.select);
export const type = transform(shelf.type);
export const reducer = transform(shelf.reducer);
