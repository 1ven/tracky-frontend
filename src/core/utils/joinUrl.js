import {
  ifElse,
  flip,
  head,
  tail,
  compose,
  identity,
  concat,
  equals,
  not,
  replace
} from "ramda";

const notSlash = compose(not, equals("/"));
const after = flip(concat);

const resolve = compose(
  ifElse(compose(notSlash, tail), after("/"), identity),
  ifElse(compose(notSlash, head), concat("/"), identity),
  replace(/\/+/g, "/")
);

export default compose(concat, resolve);
